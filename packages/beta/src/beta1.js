import _ from 'lodash';

const getAllNames = (arr) => {
    return _.map(arr, 'name');
};

export default getAllNames;