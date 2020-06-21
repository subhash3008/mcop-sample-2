import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'nomination-form',
                title    : 'Nomination Form',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'view_list',
                url      : '/nomination-form',
                // badge    : {
                //     title    : '25',
                //     translate: 'NAV.SAMPLE.BADGE',
                //     bg       : '#F44336',
                //     fg       : '#FFFFFF'
                // }
            },
            {
                id: 'abcd',
                title: 'ABCD',
                type: 'item',
                icon: 'email',
                url: '/abcd'
            }
        ]
    }
];
