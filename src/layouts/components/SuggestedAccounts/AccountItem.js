import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { AccountPreview } from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={AccountPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="//yt3.ggpht.com/r5D3O6CLFaWrUl-Xi_bYBmrl7CCFsyMjvaP2LvlQExgquysENUVHN73PniDiuVM1_SoaHf3tvcU=s176-c-k-c0x00ffffff-no-rj-mo"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>theanh28entertainment </strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Theanh28 Entertainment</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
