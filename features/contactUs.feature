Feature: The Shady Meadows Website

  Create an automated test that completes the contact us form on the homepage, submits it, 
  and asserts that the form was completed successfully.

  Scenario Outline: As a visitor, I can sumbit a message using the contact us form

    Given I am on the home page
    When I sumbit a message as <name>
    Then I should see a flash message saying <message>

    Examples:
      | name        | message                     |
      | Mr. Testing | Thanks for getting in touch |

