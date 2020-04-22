import {miscConstants} from '../_constants/miscConstants';

export const miscActions = {
    openSpinner,
    closeSpinner
};

function openSpinner(open) {
    return {type: miscConstants.OPEN_SPINNER,open};
}
function closeSpinner(open) {
    return {type: miscConstants.CLOSE_SPINNER,open};
}

