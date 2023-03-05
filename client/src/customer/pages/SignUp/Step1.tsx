import Button from '@customer/UI/Form/Button';
import ButtonSortDiv from '@customer/UI/Form/ButtonSortDiv';
import PlaceHolderText from '@customer/UI/Form/PlaceHolder';
import ResetButton from '@customer/UI/Form/ResetButton';
import React, { ChangeEventHandler, MouseEventHandler, useState } from 'react';

// const step1 = (props: {
//   value: string;
//   onChange: ChangeEventHandler;
//   onReset: MouseEventHandler;
//   onClick: MouseEventHandler;
// }) => {
//   return (
//     <>
//       <form onClick={props.onClick}>
//         <ButtonSortDiv>
//           <PlaceHolderText
//             content="이메일 주소"
//             type="text"
//             value={props.value}
//             onChange={props.onChange}
//             pattern="^[a-zA-Z0-9]{2,}@[a-zA-Z0-9]{2,}.[a-zA-Z0-9]{2,}$"
//           />
//           {props.value.length > 0 && <ResetButton onClick={props.onReset} />}
//         </ButtonSortDiv>

//         <Button title="다음" type="submit" />
//       </form>
//     </>
//   );
// };
const step1 = () => {
  const [memberEmail, setMemberEmail] = useState('');

  const memberEmailHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMemberEmail(event.target.value);
  };

  const memberEmailReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMemberEmail('');
  };
  const submit = (event: React.MouseEvent<HTMLButtonElement>) => {
    // event.preventDefault();
    console.log(memberEmail);
  };

  return (
    <>
      <form>
        <ButtonSortDiv>
          <PlaceHolderText
            content="이메일 주소"
            type="text"
            value={memberEmail}
            onChange={memberEmailHandle}
            pattern="^[a-zA-Z0-9]{2,}@[a-zA-Z0-9]{2,}.[a-zA-Z0-9]{2,}$"
          />
          {memberEmail.length > 0 && <ResetButton onClick={memberEmailReset} />}
        </ButtonSortDiv>

        <Button title="다음" type="submit" onClick={submit} />
      </form>
    </>
  );
};

export default step1;
