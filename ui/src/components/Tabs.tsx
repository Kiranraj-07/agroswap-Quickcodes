import { useState } from 'react';
import { NotificationContext } from '../context/NotificationContext';
import { Notifications } from './Notifications';
import Orchestration from './Orchestration';
import { TabWrapper } from './TabWrapper';

const dynamicToastChildStatuses = [
  'info',
  'success',
  'warning',
  'error',
] as const;

type DynamicToastChild = {
  text: string;
  status: (typeof dynamicToastChildStatuses)[number];
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Interchain Accounts');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const [notifications, setNotifications] = useState<DynamicToastChild[]>([]);

  const addNotification = (newNotification: DynamicToastChild) => {
    setNotifications([...notifications, newNotification]);
  };

  return (
    <div className="my-8 w-full max-w-4xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 rounded-xl mx-auto">
      <Notifications
        notifications={notifications}
        setNotifications={setNotifications}
      />
      <NotificationContext.Provider
        value={{ addNotification: addNotification }}
      >
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div role="tablist" className="flex border-b border-gray-700">
            <TabWrapper
              tab="Interchain Accounts"
              activeTab={activeTab}
              handleTabClick={handleTabClick}
            >
              <Orchestration />
            </TabWrapper>
          </div>
          <div className="p-6">
            {activeTab === 'Interchain Accounts' && <Orchestration />}
          </div>
        </div>
      </NotificationContext.Provider>
    </div>
  );
};

export { Tabs };
export type { DynamicToastChild };

