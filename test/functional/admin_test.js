Feature('Admin Web');

Scenario('add all the roles @pipeline', I => {
  I.loginToAdminConsole();
  I.createRole('citizen');
  I.createRole('caseworker-privatelaw-solicitor');
  I.createRole('caseworker-privatelaw-courtadmin');
  I.createRole('caseworker-privatelaw-judge');
  I.createRole('caseworker-privatelaw-la');
  I.createRole('caseworker-privatelaw-superuser');
  I.createRole('caseworker-privatelaw-systemupdate');
  I.createRole('caseworker-privatelaw-bulkscan');
  I.createRole('caseworker-privatelaw-bulkscansystemupdate');
  I.createRole('payments');
  I.createRole('caseworker-caa');
  I.createRole('caseworker-approver');
  I.createRole('pui-case-manager');
  I.createRole('courtnav');
  I.createRole('global');
  I.createRole('caseworker-wa-task-configuration');
  I.createRole('caseworker-ras-validation');
  I.createRole('GS_profile');
  I.createRole('caseworker-privatelaw-externaluser-viewonly');
  I.createRole('ctsc-team-leader');
  I.createRole('caseworker-privatelaw-cafcass');
  I.click('Manage User Roles');
  I.see('citizen');
  I.see('caseworker-privatelaw-solicitor');
  I.see('caseworker-privatelaw-courtadmin');
  I.see('caseworker-privatelaw-judge');
  I.see('caseworker-privatelaw-la');
  I.see('caseworker-privatelaw-superuser');
  I.see('caseworker-privatelaw-systemupdate');
  I.see('caseworker-privatelaw-bulkscan');
  I.see('caseworker-privatelaw-bulkscansystemupdate');
  I.see('payments');
  I.see('caseworker-caa');
  I.see('caseworker-approver');
  I.see('pui-case-manager');
  I.see('courtnav');
  I.see('caseworker-wa-task-configuration');
  I.see('caseworker-ras-validation');
  I.see('GS_profile');
  I.see('caseworker-privatelaw-externaluser-viewonly');
  I.see('ctsc-team-leader');
  I.see('caseworker-privatelaw-cafcass');
}).retry({ retries: 3, minTimeout: 30000 }); // eslint-disable-line no-magic-numbers

Scenario('upload Private Law Config file @pipeline', I => {
  I.loginToAdminConsole();
  try {
    I.uploadConfig(`../../definitions/private-law/xlsx/${process.env.CCD_FILE_NAME}`);
    I.wait('40');
  } catch (error) {
    console.log(error);
  }
}).retry({ retries: 3, minTimeout: 30000 }); // eslint-disable-line no-magic-numbers
