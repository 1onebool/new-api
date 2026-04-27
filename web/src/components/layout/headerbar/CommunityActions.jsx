/*
Copyright (C) 2025 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/

import React from 'react';
import { Button, Popover, Typography } from '@douyinfe/semi-ui';
import { Copy, Users } from 'lucide-react';
import { copy, showError, showSuccess } from '../../../helpers';

const groupQRCodes = [
  {
    key: 'qq',
    title: 'QQ群',
    description: '扫码加入 QQ 用户群',
    src: '/contact-groups/qq-group.jpg',
  },
  {
    key: 'wechat',
    title: '微信群',
    description: '扫码加入微信用户群',
    src: '/contact-groups/wechat-group.jpg',
  },
];

const actionButtonClass =
  '!h-8 !rounded-full !px-2.5 !text-blue-600 dark:!text-blue-300 !bg-blue-50/80 dark:!bg-blue-950/40 hover:!bg-blue-100 dark:hover:!bg-blue-900/70 !border !border-blue-100 dark:!border-blue-800/70';

const buildUserIdCopyText = (userId) => `中转站就用1bool.com,我的id是${userId}`;

const renderButtonLabel = (Icon, label) => (
  <span className='inline-flex items-center gap-1 whitespace-nowrap text-xs font-semibold'>
    <Icon size={14} />
    <span className='hidden md:inline'>{label}</span>
  </span>
);

const CommunityActions = ({ userState, isMobile, t }) => {
  const userId = userState?.user?.id;
  const hasUserId =
    userId !== undefined && userId !== null && `${userId}` !== '';

  const handleCopyUserId = async () => {
    if (!hasUserId) {
      showError(t('无法获取用户ID'));
      return;
    }

    const ok = await copy(buildUserIdCopyText(userId));
    if (ok) {
      showSuccess(t('已复制用户ID'));
    } else {
      showError(t('复制失败，请手动复制'));
    }
  };

  const popoverContent = (
    <div className='p-3' style={{ width: 'min(248px, calc(100vw - 24px))' }}>
      <div className='mb-3 flex items-center gap-2'>
        <span className='flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-300'>
          <Users size={15} />
        </span>
        <div className='min-w-0'>
          <Typography.Text className='!text-sm !font-semibold !text-semi-color-text-0'>
            {t('用户群')}
          </Typography.Text>
          <Typography.Text className='block !text-xs !text-semi-color-text-2'>
            {t('扫码加入用户群')}
          </Typography.Text>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        {groupQRCodes.map((group) => (
          <div
            key={group.key}
            className='rounded-lg border border-semi-color-border bg-semi-color-bg-0 p-2 shadow-sm'
          >
            <img
              src={group.src}
              alt={t(group.description)}
              className='mx-auto max-h-[210px] w-full rounded-md object-contain'
            />
            <div className='mt-2 text-center'>
              <Typography.Text className='!text-xs !font-semibold !text-semi-color-text-0'>
                {t(group.title)}
              </Typography.Text>
              <Typography.Text className='block !text-[11px] !text-semi-color-text-2'>
                {t(group.description)}
              </Typography.Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className='flex items-center gap-2'>
      <Popover
        content={popoverContent}
        position={isMobile ? 'bottomLeft' : 'bottomRight'}
        trigger='click'
        showArrow
      >
        <span className='inline-flex'>
          <Button
            theme='borderless'
            type='tertiary'
            aria-label={t('用户群')}
            className={actionButtonClass}
          >
            {renderButtonLabel(Users, t('用户群'))}
          </Button>
        </span>
      </Popover>

      {hasUserId && (
        <Button
          theme='borderless'
          type='tertiary'
          aria-label={t('复制ID')}
          className={actionButtonClass}
          onClick={handleCopyUserId}
        >
          {renderButtonLabel(Copy, t('复制ID'))}
        </Button>
      )}
    </div>
  );
};

export default CommunityActions;
