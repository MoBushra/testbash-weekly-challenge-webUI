Feature: The Shady Meadows Admin Messages

  Create an automated test that reads a specific message on the admin side of the site.

  @ReadAdminMessage
  Scenario Outline: As an admin, I want to read a message in the inbox
    Given User <name> sends a message 
    When I log in as an admin using my admin credentials
    And I open the specific message send by <name>
    Then I should see the content of the message by <name>

    Examples:
      | name        |
      | Mr. Testing |

