Feature: BBC Homepage Accessibility
  In order access the BBC website
  I want to have BBC pages accessible
  So that I can enjoy BBC content without any pain

 Scenario: Check Homepage
   Given I visit the BBC website
   Then the page should be accessible according to: wcag2a; checking: color-contrast
