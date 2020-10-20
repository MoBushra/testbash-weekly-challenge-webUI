Feature: The Shady Meadows Book a Room

    Create an automated test where a user successfully books a room from the homepage

    @BookRoom
    Given I am on the homepage
    When I book a room for 3 days under the name <name>
    Then I should see a message saying <message>
