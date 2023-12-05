Feature: Book seance
    Scenario: Should book on today seance
        Given user is on 'http://qamid.tmweb.ru/client/index.php' page
        When user click on 'a[data-time-stamp="1701723600"]' day 'a[data-seance-id="190"]' seance and choose 1 row and 3 seat
        Then user can book seat(s) with '.acceptin-button' confirm button
    Scenario: Should book un tomorrow seance
        Given user is on 'http://qamid.tmweb.ru/client/index.php' page
        When user click on 'a[data-time-stamp="1701810000"]' day 'a[data-seance-id="190"]' seance and choose 1 row and 3 seat
        Then user can book seat(s) with '.acceptin-button' confirm button