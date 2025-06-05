import React from 'react';
import { Svg } from '../../../components/styles/common-style';

interface IProps {
  selected?: boolean;
  size?: number;
}
export const Iconsearchcircle: React.FC<IProps> = (props) => {
  const { size = 20, selected = false } = props;
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<svg width="20" height="20" viewBox="0 0 20 20" fill={`var(--color-${selected ? 'on-surface-gnb-select' : 'icon-secondary'})`} xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="8" fill={`var(--color-${selected ? 'on-surface-gnb-select' : 'icon-secondary'})`}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9866 14L10.9099 11.9233C10.4175 12.2373 9.83229 12.4228 9.20428 12.4228C7.43443 12.4228 6 10.9884 6 9.21142C6 7.43443 7.43443 6 9.21142 6C10.9884 6 12.4228 7.43443 12.4228 9.21142C12.4228 9.83943 12.2373 10.4175 11.9233 10.917L14 12.9866L12.9866 14ZM9.21137 7.42731C8.22653 7.42731 7.42725 8.22659 7.42725 9.21143C7.42725 10.1963 8.22653 10.9956 9.21137 10.9956C10.1962 10.9956 10.9955 10.1963 10.9955 9.21143C10.9955 8.22659 10.1962 7.42731 9.21137 7.42731Z" fill={`var(--color-${selected ? 'on-surface-gnb-select' : 'icon-secondary'})`}/>
</svg>

    </Svg>
  );
};