const I = actor();

module.exports = {

  fields: {
    submit: 'button[type="submit"]',
    textareaText: 'Testing text area'
  },

  async triggerEvent() {
    await I.triggerEvent('Child details');
  },

  async addNewChild2() {
    await I.click('Add new');
    await I.fillField('//input[@id="children_1_firstName"]', 'Test Firstname2');
    await I.fillField('//input[@id="children_1_lastName"]', 'Test Lastname2');
    await I.retry(3).fillField('(//input[@id="dateOfBirth-day"])[2]', '22');
    await I.retry(3).fillField('(//input[@id="dateOfBirth-month"])[2]', '11');
    await I.wait('1');
    await I.retry(3).fillField('(//input[@id="dateOfBirth-year"])[2]', '2005');
    await I.retry(3).checkOption('//input[@id="children_1_gender-female"]');
    await I.retry(3).checkOption('//input[@id="children_1_orderAppliedFor-childArrangementsOrder"]');
    await I.retry(3).checkOption('//input[@id="children_1_applicantsRelationshipToChild-stepFather"]');
    await I.retry(3).checkOption('//input[@id="children_1_respondentsRelationshipToChild-mother"]');
    await I.retry(3).checkOption('//input[@id="children_1_childLiveWith-applicant"]');
    await I.fillField('//textarea[@id="children_1_parentalResponsibilityDetails"]', 'Text area field Test');
  },

  async fillChildrenPage() {
    const retryCount = 3;
    await I.waitForElement('#children');
    await I.click('Add new');
    await I.fillField('//input[@id="children_0_firstName"]', 'Test Firstname');
    await I.fillField('//input[@id="children_0_lastName"]', 'Test Lastname');
    await I.retry(3).fillField('(//input[@id="dateOfBirth-day"])[1]', '11');
    await I.retry(3).fillField('(//input[@id="dateOfBirth-month"])[1]', '11');
    await I.wait('1');
    await I.retry(3).fillField('(//input[@id="dateOfBirth-year"])[1]', '2005');
    await I.retry(3).checkOption('//input[@id="children_0_gender-male"]');
    await I.retry(3).checkOption('//input[@id="children_0_orderAppliedFor-childArrangementsOrder"]');
    await I.retry(3).checkOption('//input[@id="children_0_applicantsRelationshipToChild-stepFather"]');
    await I.retry(3).checkOption('//input[@id="children_0_respondentsRelationshipToChild-mother"]');
    await I.retry(3).checkOption('//input[@id="children_0_childLiveWith-applicant"]');
    await I.fillField('//textarea[@id="children_0_parentalResponsibilityDetails"]', 'Text area field Test');
    await this.addNewChild2();
    await I.click(this.fields.submit);
  },

  async fillAdditionalQuestionsPage() {
    await I.retry(3).waitForText('Are any of the children known to the local authority children\'s services? (Optional)');
    await I.retry(3).checkOption('//input[@id="childrenKnownToLocalAuthority-yes"]');
    await I.wait('1');
    await I.retry(3).fillField('#childrenKnownToLocalAuthorityTextArea', 'Text Area');
    await I.retry(3).wait('1');
    await I.retry(3).checkOption('//input[@id="childrenSubjectOfChildProtectionPlan-yes"]');
    await I.wait('2');
    await I.click(this.fields.submit);
  },

  async runChildDetailsEventHappyPath() {
    await this.triggerEvent();
    await this.fillChildrenPage();
    await this.fillAdditionalQuestionsPage();
    await I.submitEvent();
    await I.amOnHistoryPageWithSuccessNotification();
  }
};
