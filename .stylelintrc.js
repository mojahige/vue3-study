module.exports = {
  plugins: ['stylelint-scss'],
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-disallowed-list': ['extend'],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['/^v-/']
      }
    ]
  }
};
