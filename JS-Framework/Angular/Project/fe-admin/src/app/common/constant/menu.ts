// menu map
export const Menu = {
    skin: 'blue',
    sidebarLeftMenu: [
        { label: 'Dashboard', route: '/', iconClasses: 'fa fa-desktop' },
        { label: 'Admin', separator: true },
        {
            label: 'Master Data', iconClasses: 'fa fa-database', children: [
                { label: 'Master Data Type', route: 'master-data/master-data-type' },
                { label: 'Master Data List', route: 'master-data/master-data-list' },
            ]
        },
        {
            label: 'Administration', iconClasses: 'fa fa-cogs', children: [
                { label: 'Users', route: 'administration/user' },
                // { label: 'Customers', route: 'administration/customer' },
                { label: 'Languages', route: 'administration/language' },
            ]
        },
    ]
};
