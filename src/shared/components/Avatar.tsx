import React from 'react';
import { styled } from '@mui/system';

const AvatarPreview = styled('div')({
    height: '42px',
    width: '42px',
    backgroundColor: '#5865f2',
    borderRadius: '42px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: '700',
    marginLeft: '5px',
    color: 'white',
});
interface IProps {
    username: string;
    large: boolean;
}
const Avatar = ({ username, large }: any) => {
    // avatar를 불러 쓴 상위의 컴포넌트에서 username , large 로 물려주는데 large 값은
    // 변수선언은 상위 컴포넌트에서 한것이고 속성은 바뀔수 상위와 하위의 상태는 바뀔수 있어서 상태는 다를수있음
    // 변수 x, y 의 값은 존재
    return (
        <AvatarPreview style={large ? { height: '80px', width: '80px' } : {}}>{username.substring(0, 2)}</AvatarPreview>
    );
};

export default Avatar;
