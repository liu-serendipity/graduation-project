import classnames from 'classnames';
import * as React from 'react';
// @ts-ignore
import Notification from 'rmc-notification';
import './index.css';
const SHORT = 2;
const config = {
  duration: SHORT,
  mask: true,
};

let messageInstance = null;
let messageNeedHide = false;

const prefixCls = 'toast-comp';
// allowClick 允许点击穿透
function getMessageInstance(mask, callback, allowClick) {
  Notification.newInstance(
    {
      style: {}, // clear rmc-notification default style
      transitionName: 'fade',
      className: classnames({
        [`${prefixCls}-mask`]: mask,
        [`${prefixCls}-nomask`]: !mask,
        'mask-allow-click': allowClick,
      }),
    },
    (notification) => callback && callback(notification),
  );
}

function notice(content, type, duration = config.duration, onClose, mask = config.mask) {
  const iconTypes = {
    info: '',
    success: 'success',
    fail: 'fail',
    offline: 'dislike',
    loading: 'loading',
  };
  const iconType = iconTypes[type];
  messageNeedHide = false;
  getMessageInstance(
    mask,
    (notification) => {
      if (!notification) {
        return;
      }

      if (messageInstance) {
        messageInstance.destroy();
        messageInstance = null;
      }

      if (messageNeedHide) {
        notification.destroy();
        messageNeedHide = false;
        return;
      }

      messageInstance = notification;

      notification.notice({
        duration,
        style: {},
        content: !!iconType ? (
          <div className={`${prefixCls}-cont ${prefixCls}-type`} role='alert' aria-live='assertive'>
            <div className={`${prefixCls}-type_${iconType} ${prefixCls}-type_icon`}></div>
            <div className={`${prefixCls}-text`}>{content}</div>
          </div>
        ) : (
          <div className={`${prefixCls}-cont ${prefixCls}-text`} role='alert' aria-live='assertive'>
            <div>{content}</div>
          </div>
        ),
        closable: true,
        onClose() {
          if (onClose) {
            onClose();
          }
          notification.destroy();
          notification = null;
          messageInstance = null;
        },
      });
    },
    iconType !== 'loading',
  );
}

export default {
  SHORT,
  LONG: 8,
  show(content, duration, mask) {
    return notice(
      content,
      'info',
      duration,
      () => {
        return null;
      },
      mask,
    );
  },
  info(content, duration, onClose, mask) {
    return notice(content, 'info', duration, onClose, mask);
  },
  success(content, duration, onClose, mask) {
    return notice(content, 'success', duration, onClose, mask);
  },
  fail(content, duration, onClose, mask) {
    return notice(content, 'fail', duration, onClose, mask);
  },
  offline(content, duration, onClose, mask) {
    return notice(content, 'offline', duration, onClose, mask);
  },
  loading(content, duration, onClose, mask) {
    return notice(content, 'loading', duration, onClose, mask);
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    } else {
      messageNeedHide = true;
    }
  },
  config(conf) {
    const { duration = SHORT, mask } = conf;
    config.duration = duration;
    if (mask === false) {
      config.mask = false;
    }
  },
};
