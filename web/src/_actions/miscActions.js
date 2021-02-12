import {miscConstants} from '../_constants/miscConstants';

export const miscActions = {
    openSpinner,
    closeSpinner,
    openCategoryModal,
    closeCategoryModal

};

function openSpinner(open) {
    return {type: miscConstants.OPEN_SPINNER,open};
}
function closeSpinner(open) {
    return {type: miscConstants.CLOSE_SPINNER,open};
}

function openCategoryModal(open) {
    return {type: miscConstants.OPEN_CATEGORY_MODAL,open};
}

function closeCategoryModal(open) {
    return {type: miscConstants.CLOSE_CATEGORY_MODAL,open};
}

