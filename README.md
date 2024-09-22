**acbl_live_to_bridgewinners**

Converts bridge hand diagrams scraped from [ACBL Live](live.acbl.org) into a series of tags suitable for use in a [BridgeWinners](BridgeWinners.com) article.

The project consists of a javascript file that performs the conversion and an HTML file that provides a basic UI, plus a second javascript file that's used only for the UI.

The acbl_live_to_bridgewinners.js script cannot currently be run from a console using node.js.

You can use the script directly here:

https://tameware.com/adam/bridge/utilities/

To run the tests, you must first run `npm install` to create the node_modules directory. Then pick a target from package.json:

    npx run unit_tests
    npx run local_e2e_tests
    npm run all_tests      # Both of the above
    npm run cypress:server # Run against the version deployed to tameware.com
    npm run cypress:open # Open the Cypress test console

> Written with [StackEdit](https://stackedit.io/).
