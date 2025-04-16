import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/shopping';
import { hideToast } from '../../../store/slices/toastSlice';
import './Toast.scss';

const Toast: React.FC = () => {
  const dispatch = useDispatch();
  const { isVisible, message } = useSelector((state: RootState) => state.toast);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        dispatch(hideToast());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, dispatch]);

  if (!isVisible) return null;

  return (
    <div className="toast">
      <div className="toast__content">
        {message}
      </div>
    </div>
  );
};

export default Toast;