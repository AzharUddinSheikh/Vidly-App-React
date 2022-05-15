import _ from 'lodash';

export function paginate(items : any, pageNumber: number, pageSize: number) {
    const startIndex = (pageNumber - 1) * pageSize;
    // convert items to lodash object for chaining 
    // value will return regular array
    return _(items).slice(startIndex).take(pageSize).value();
}