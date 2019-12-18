import AdminHomePage from '../../containers/AdminHomePage';
import TaskBoard from '../../containers/TaskBoard';

export const ADMIN_ROUTES = [
	{ path: '/', name: 'Page Admin', exact: true, component: AdminHomePage },
	{ path: '/task-board', name: 'Management Task', component: TaskBoard },
];
