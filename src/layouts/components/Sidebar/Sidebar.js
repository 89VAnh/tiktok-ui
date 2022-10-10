import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import styles from './Sidebar.module.scss';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveSideActiveIcon,
    LiveSideIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/component/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveSideIcon />}
                    activeIcon={<LiveSideActiveIcon />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
