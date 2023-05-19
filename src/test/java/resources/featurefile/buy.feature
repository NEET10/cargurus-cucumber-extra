
Feature: Search functionality
 @sanity  @regression
  Scenario Outline: Search the buy car with model
    Given I am on homepage
    When I mouse hover on buy+sell tab
    And I click Search Cars link
    Then I navigate to new and used car search page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results
    Examples:
      | make  | model    | location        | price   |
      | Audi  | A4       | QLD - All       | $45,000 |
      | BMW   | 1 Series | ACT - All       | $40,000 |
      | Honda | Beat     | NSW - All       | $50,000 |
      | MG    | 3        | QLD - All       | $60,000 |
      | Mazda | 6        | QLD - All       | $35,000 |
      | Ford  | Mustang  | NSW - Illawarra | $90,000 |

  @smoke  @regression
  Scenario Outline: Search the used car with model
    Given I am on homepage
    When I mouse hover on buy+sell tab
    And I click ‘Used’ link
    Then I navigate to ‘Used Cars For Sale’ page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results
    Examples:
      | make | model | location | price |
      | Audi  | A4       | QLD - All       | $45,000 |
      | BMW   | 1 Series | ACT - All       | $40,000 |
      | Honda | Beat     | NSW - All       | $50,000 |
      | MG    | 3        | QLD - All       | $60,000 |
      | Mazda | 6        | QLD - All       | $35,000 |
      | Ford  | Mustang  | NSW - Illawarra | $90,000 |