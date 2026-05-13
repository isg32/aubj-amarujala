/**
 * Bhavishya Jyoti Samman 2026 — Registration Backend
 * Failsafe Google Apps Script bound to a Google Sheet.
 *
 * SETUP
 * 1. Open your target Google Sheet → Extensions → Apps Script.
 * 2. Replace any code with this file's contents and Save.
 * 3. Deploy → New deployment → Type: Web app
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 4. Copy the Web App URL into APPS_SCRIPT_URL inside
 *    src/components/RegistrationForm.tsx
 *
 * The sheet, headers, and ordering are auto-created on first POST.
 */

var SHEET_NAME = 'Registrations';

var HEADERS = [
  'Timestamp',
  'Student Name',
  'Class',
  'Stream',
  'Board',
  'School',
  'Phone Number',
  'Email',
  'State',
  'District',
  'Announced Board Score %',
  'Actual Result %',
  'Confirmed Accurate',
  'Agreed To Terms'
];

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function sanitize_(v) {
  if (v === null || v === undefined) return '';
  var s = String(v);
  // Prevent spreadsheet formula injection
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s.slice(0, 500);
}

function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(5000);
  } catch (err) {
    return jsonResponse_({ ok: false, error: 'Server busy, retry.' });
  }

  try {
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try { data = JSON.parse(e.postData.contents); }
      catch (_) { data = e.parameter || {}; }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var sheet = getSheet_();
    sheet.appendRow([
      new Date(),
      sanitize_(data.studentName),
      sanitize_(data.class),
      sanitize_(data.stream),
      sanitize_(data.board),
      sanitize_(data.school),
      sanitize_(data.phoneNumber),
      sanitize_(data.email),
      sanitize_(data.state),
      sanitize_(data.district),
      sanitize_(data.preBoardPercent),
      sanitize_(data.expectedScore),
      data.confirmAccurate ? 'Yes' : 'No',
      data.agreeTerms ? 'Yes' : 'No'
    ]);

    return jsonResponse_({ ok: true });
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (_) {}
  }
}

function doGet() {
  return jsonResponse_({ ok: true, service: 'AUBJ Registrations', headers: HEADERS });
}
