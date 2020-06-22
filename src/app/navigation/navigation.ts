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
                id: 'guidelines-faq',
                title: 'Guidelines And FAQs',
                type: 'item',
                icon: 'email',
                url: '/guidelines-faq'
            },
            {
                id: 'important-dates',
                title: 'Important Dates',
                type: 'item',
                icon: 'calendar_today',
                url: '/important-dates'
            }
        ]
    }
];
