Feature: Suite 2

  @test
  Scenario: Successfully load a web page
    When I load my web page
    Then I should see my web page

  @test @ignore
  Scenario: Verify scenario with @ignore is not executed
    When I should be ignored
