@login
Feature: Login Test

    Background:
    Given user is on Login Page

    @positive @tc1
    Scenario Outline: Login Success
        And user input "<username>" as username and user input "<password>" as password
        Then user redirected to homepage
        Examples:
            | username| password | 
            | standard_user  | secret_sauce  |
    
        When user click login button

    @negative @tc2    
    Scenario Outline: Login Fail
        And user input "<username>" as username and user input "<password>" as password
        Examples:
            |username | password | 
            | error_user | secret_sauce  |
    
