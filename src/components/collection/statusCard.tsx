import { cn } from '@/lib/utils';

type Status = 'success' | 'warning' | 'error';

type StatusCardProps = {
  icon: JSX.Element;
  title: string;
  status: Status;
  description?: string;
};

export const StatusCard: React.FC<StatusCardProps> = ({ icon, title, status, description }) => {
  return (
    <div className='flex items-center rounded-md border border-border p-2'>
      <div className='size-full rounded-sm border border-border p-2'>{icon}</div>
      <div className='ml-2 flex flex-col justify-center'>
        <h2>{title}</h2>
        <div className='flex items-center justify-between gap-x-1'>
          <Indicator status={status} />
          <p className='text-sm text-muted-foreground'>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Indicator: React.FC<{ status: Status }> = ({ status }) => {
  const innerStatusStyles = {
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    error: 'bg-red-600',
  };

  const outerStatusStyles = {
    success: 'bg-green-300',
    warning: 'bg-yellow-300',
    error: 'bg-red-300',
  };
  return (
    <div>
      <div
        className={cn(
          `flex size-3 items-center justify-center rounded-full`,
          outerStatusStyles[status],
        )}
      >
        <div className={cn(`size-2 rounded-full`, innerStatusStyles[status])} />
      </div>
    </div>
  );
};
