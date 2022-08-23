export const toolbarInitialState = {
    basemap : '',
    draw : '',
    measure: '',
    clear: '',
    print: '',
};

export function toolbarReducer(state, action) {
    switch (action.type) {
        case 'ACTIVE_BASEMAP':
            return {
                ...state,
                basemap : state.basemap === 'active' ? '' : 'active',
                draw: '',
                measure : '',
                clear : '',
                print : '',
            };
        case 'ACTIVE_DRAW':
            return {
                ...state,
                draw : state.draw === 'active' ? '' : 'active',
                basemap: '',
                measure : '',
                clear : '',
                print : '',
            };
        case 'ACTIVE_MEASURE':
            return {
                ...state,
                measure : state.measure === 'active' ? '' : 'active',
                basemap: '',
                draw : '',
                clear : '',
                print : '',
            };
        case 'ACTIVE_CLEAR':
            return {
                ...state,
                measure : '',
                basemap: '',
                draw : '',
                clear : '',
                print : '',
            };
        case 'ACTIVE_PRINT':
            return {
                ...state,
                print : state.print === 'active' ? '' : 'active',
                basemap: '',
                draw : '',
                clear : '',
                measure : '',
            };
        default :
            return state;
    }
}