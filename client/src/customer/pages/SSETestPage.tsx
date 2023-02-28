import { ChangeEvent, useState } from 'react';

const SSETestPage = () => {
  const [memberData, setMemberData] = useState({
    memberRole: 0,
    memberEmail: '',
    memberPassword: '',
    memberName: '',
    memberPhone: '',
    memberAddress: '',
  });

  const idHandle = (event: ChangeEvent) => {
    console.log((event.target as HTMLInputElement).value);
    const value = (event.target as HTMLInputElement).value;
    // setMemberData( memberData.memberEmail:value);
  };
  return (
    <div>
      SSE_TEST!
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          value={memberData.memberEmail}
          placeholder="아이디"
          onChange={idHandle}
        />
      </div>
    </div>
  );
};

export default SSETestPage;
