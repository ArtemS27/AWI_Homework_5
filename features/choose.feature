Feature: Choose seats
    Scenario: Should throw error if choose unexisted seat
        Given user is on 'http://qamid.tmweb.ru/client/index.php' page
        When user click on 'a[data-time-stamp="1701723600"]' day 'a[data-seance-id="190"]' seance
        Then user choose 13 row and 20 seat