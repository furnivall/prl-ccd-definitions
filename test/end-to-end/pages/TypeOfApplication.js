const I = actor();

module.exports = {

  fields: {
    nextStepField: '#next-step',
    eventSelectField: 'select[id="next-step"]',
    eventName: 'Type of application',
    submit: 'button[type="submit"]',
    childArrangementsOrder: 'input[id="ordersApplyingFor-childArrangementsOrder"]',
    prohibitedStepsOrder: 'input[id="ordersApplyingFor-prohibitedStepsOrder"]',
    specificIssueOrder: 'input[id="ordersApplyingFor-specificIssueOrder"]',
    textAreaText: 'Testing text area',
    natureOfOrderTextArea: 'textarea[id="natureOfOrder"]',
    permissionRequiredRadioButton: 'input[id="applicationPermissionRequired-yes"]',
    appPermissionRequiredReason: 'textarea[id="applicationPermissionRequiredReason"]',
    appDetailsTextArea: 'textarea[id="applicationDetails"]',
    appUrgentInput: 'input[id="isApplicationUrgent_Yes"]',
    appUrgencyOrdersSoughtTextArea: 'textarea[id="applicationUrgencyOrders"]',
    appReasonsForUrgencyTextArea: 'textarea[id="applicationReasonsForUrgency"]',
    appConsideredDay: 'input[id="applicationConsideredInDaysAndHours_days"]',
    appConsideredHour: 'input[id="applicationConsideredInDaysAndHours_hours"]',
    appNoticeEffortsTextArea: 'textarea[id="applicationNoticeEfforts"]',
    appWithoutNotice: 'input[id="isApplicationConsideredWithoutNotice_Yes"]',
    appWithoutNoticeReasons: 'textarea[id="applicationWithoutNoticeReasons"]',
    appWithoutNoticeNotPossible: 'input[id="isHearingWithoutNoticeRequiredNotPossible_Yes"]',
    appWithoutNoticeNotPossibleReason: 'textarea[id="applicationWithoutNoticeNotPossibleReasons"]',
    appWithoutNoticeRespondentWllFrustrate: 'input[id="isHearingWithoutNoticeRequiredRespondentWillFrustrate_Yes"]',
    appWithoutNoticeRespondentWllFrustrateTextArea: 'textarea[id="applicationWithoutNoticeRespondentWillFrustrateReasons"]',
    consentOrderYes: '#consentOrder_Yes',
    typeOfChildArrangementsOrder: '#typeOfChildArrangementsOrder-bothLiveWithAndSpendTimeWithOrder',
    nonMolestationOrder: '#typeOfApplicationOrders_orderType-nonMolestationOrder',
    occupationOrder: '#typeOfApplicationOrders_orderType-occupationOrder',
    ordersApplyingForPageHeader: 'Which order(s) are you applying for?',
    ordersApplyingForPageMandatoryText: 'Which order(s) are you applying for? is required',
    linkToChildArrangementsApplicationHeader: 'Is this linked to C100 application? (Optional)',
    linkedChildArrangementsApplicationYes: '#typeOfApplicationLinkToCA_linkToCaApplication_Yes',
    childArrangementOrderInstructionText: 'If you have also completed a Child Arrangements Order application enter the case number below.',
    childArrangementCaseNumberLabel: 'Child Arrangements Case Number (FamilyMan cases not supported) (Optional)',
    childArrangementsCaseNumberField: '#typeOfApplicationLinkToCA_caApplicationNumber',
    // Case Number Regex validation error message to be introduced
    childArrangementsCaseNumberText: '1234123412341234',
    checkYourAnswersPageHeader: 'Check your answers'
  },

  async actionTypeOfApplicationEvent() {
    await I.waitForText(this.fields.eventName);
    await I.selectOption(this.fields.eventSelectField, this.fields.eventName);
    await I.waitForEnabled(this.fields.submit);
    await I.click(this.fields.submit);
  },

  async whatOrdersPageC100() {
    await I.waitForText('What order(s) are you applying for?');
    await I.click(this.fields.childArrangementsOrder);
    await I.click(this.fields.prohibitedStepsOrder);
    await I.click(this.fields.specificIssueOrder);
    await I.wait('5');
    await I.click(this.fields.typeOfChildArrangementsOrder);
    await I.waitForEnabled(this.fields.natureOfOrderTextArea);
    await I.fillField(this.fields.natureOfOrderTextArea, this.fields.textareaText);
    await I.click(this.fields.submit);
  },

  async draftConsentOrderC100() {
    await I.waitForText('Do you have a draft consent order?');
    await I.click(this.fields.consentOrderYes);
    await I.attachDocument('draftConsentOrderFile');
    await I.wait('5');
    await I.click('Continue');
  },

  async permissionsPageC100() {
    await I.waitForText('Have you applied to the court for permission to make this application?');
    await I.click(this.fields.permissionRequiredRadioButton);
    await I.fillField(this.fields.appPermissionRequiredReason, this.fields.textareaText);
    await I.click(this.fields.submit);
  },

  async briefDetailsPageC100() {
    await I.wait('2');
    await I.waitForText('Provide brief details of:');
    await I.fillField(this.fields.appDetailsTextArea, this.fields.textareaText);
    await I.click(this.fields.submit);
  },

  async checkYourAnswersPageC100() {
    await I.waitForText(this.fields.checkYourAnswersPageHeader);
    await I.waitForText(this.fields.textareaText);
    await I.seeDocuments('Draft consent order', 'dummy.pdf');
    await I.click('Save and continue');
  },

  async ordersApplyingForPageFL401() {
    await I.waitForText(this.fields.ordersApplyingForPageHeader);
    // Checking mandatory field validation
    await I.click(this.fields.submit);
    await I.waitForText(this.fields.ordersApplyingForPageMandatoryText);
    await I.click(this.fields.nonMolestationOrder);
    await I.click(this.fields.occupationOrder);
    await I.click('Continue');
  },

  async linkToChildArrangementsApplicationFL401() {
    await I.waitForText(this.fields.linkToChildArrangementsApplicationHeader);
    await I.click(this.fields.linkedChildArrangementsApplicationYes);
    // await I.wait('5');
    await I.waitForText(this.fields.childArrangementOrderInstructionText);
    await I.waitForText(this.fields.childArrangementCaseNumberLabel);
    await I.fillField(this.fields.childArrangementsCaseNumberField, this.fields.childArrangementsCaseNumberText);
    await I.click('Continue');
  },

  async checkYourAnswersPageFL401() {
    await I.waitForText(this.fields.checkYourAnswersPageHeader);
    await I.waitForText(this.fields.childArrangementsCaseNumberText);
    await I.click('Save and continue');
  },

  async typeOfApplicationEventC100() {
    await this.actionTypeOfApplicationEvent();
    await this.whatOrdersPageC100();
    await this.draftConsentOrderC100();
    await this.permissionsPageC100();
    await this.briefDetailsPageC100();
    await this.checkYourAnswersPageC100();
  },

  async typeOfApplicationEventFL401() {
    await this.actionTypeOfApplicationEvent();
    await this.ordersApplyingForPageFL401();
    await this.linkToChildArrangementsApplicationFL401();
    await this.checkYourAnswersPageFL401();
  }
};
