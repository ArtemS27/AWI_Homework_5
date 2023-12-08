Feature: Book seance
    Scenario: Should book on today seance
        Given user is on 'http://qamid.tmweb.ru/client/index.php' page
        When user click on 'a[data-time-stamp="1701982800"]' day 'a[data-seance-id="189"]' seance and choose 1 row and 3 seat
        Then user can book seat with '.acceptin-button' confirm button
    Scenario: Should book un tomorrow seance
        Given user is on 'http://qamid.tmweb.ru/client/index.php' page
        When user click on 'a[data-time-stamp="1702069200"]' day 'a[data-seance-id="177"]' seance and choose 1 row and 3 seat
        Then user can book seat with '.acceptin-button' confirm button
    Scenario: Should throw an error if user chooses choosen seat
        Given user is on 'http://qamid.tmweb.ru/client/index.php' page
        When user click on 'a[data-time-stamp="1702069200"]' day 'a[data-seance-id="177"]' seance
        Then user choose 2 row and 6 seat