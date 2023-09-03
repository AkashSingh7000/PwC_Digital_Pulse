Feature: Validate PwCDigital Application

  @Sanity
  Scenario Outline: Articles Column verification of Homepage
    Given I navigate to the PwC Digital Pulse website
    When I am viewing the "<Page>" page
    Then I am presented with "<ColNum>" columns of articles
    And The Left "<LeftCol>" column is displaying "<LeftColArticlesNum>" articles
    And the Middle "<MiddleCol>" column is displaying "<MiddleColArticlesNum>" articles
    And The Right "<RightCol>" column is displaying "<RightColArticlesNum>" articles
    Examples:
      | Page | ColNum | LeftCol| MiddleCol | RightCol |LeftColArticlesNum | MiddleColArticlesNum | RightColArticlesNum |
      | Home | 3      | 2      | 1         | 3        | 2                 | 1                    | 4                   |

  @Regression
  Scenario Outline: Subscribe Page Fields Verification
    Given I navigate to the PwC Digital Pulse website
    And I am viewing the "<Page>" page
    When I click on the Subscribe navigation link
    Then I am taken to the Subscribe page
    And I am presented with the below fields
      |Field                 |Required   |Type     |
      |First Name            |true       |text     |
      |Last Name             |true       |text     |
      |Organisation          |true       |text     |
      |Job title             |false      |text     |
      |Business Email Address|true       |text    |
      |State                 |true       |dropdown |
      |Countries             |true       |dropdown |
    And I will need to complete Google reCAPTCHA before I can complete my request

    Examples:
      | Page      |
      | Home      |

  @Regression
  Scenario Outline: Search Page Results Count Verification
    Given I navigate to the PwC Digital Pulse website
    When I click on the Magnifying glass icon to perform a search
    And I enter the text "<TextToEnter>"
    And I submit the search
    Then I am taken to the search results page
    And I am presented with at least "<MinNoResults>" search result
    Examples:
      | TextToEnter               | MinNoResults |
      | Single page applications  | 1            |