import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveSideActiveIcon,
    LiveSideIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/component/Icons';
import config from '~/config';
import * as userServices from '~/service/userServices';
import SuggestedAccounts from '../SuggestedAccounts';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
const PER_PAGE = 5;

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        userServices
            .getSuggested({ page: 1, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
            <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} />
            <SuggestedAccounts label="Following account" />
        </aside>
    );
}

export default Sidebar;
