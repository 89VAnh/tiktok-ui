import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/component/Button';

const cx = classNames.bind(styles);
export function AccountPreview({ props }) {
    return (
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <div className={cx('wrapper')}>
                    <div className={cx('header')}>
                        <img
                            className={cx('avatar')}
                            src="//yt3.ggpht.com/r5D3O6CLFaWrUl-Xi_bYBmrl7CCFsyMjvaP2LvlQExgquysENUVHN73PniDiuVM1_SoaHf3tvcU=s176-c-k-c0x00ffffff-no-rj-mo"
                            alt=""
                        />
                        <Button className={cx('follow-btn')} primary>
                            Follow
                        </Button>
                    </div>
                    <div className={cx('body')}>
                        <p className={cx('nickname')}>
                            <strong>theanh28entertainment</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Theanh28 Entertainment</p>
                        <p className={cx('analytics')}>
                            <strong className={cx('value')}>8.2M </strong>
                            <span className={cx('label')}>Followers</span>
                            <strong className={cx('value')}>8.2M </strong>
                            <span className={cx('label')}>Likes</span>
                        </p>
                    </div>
                </div>
            </PopperWrapper>
        </div>
    );
}
