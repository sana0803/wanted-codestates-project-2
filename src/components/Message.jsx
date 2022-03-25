import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StatTitle } from './UserStat';
import { SummaryText } from './UserStat';

const Message = () => {
  const [msgNick, setMsgNick] = useState('');
  const [msgText, setMsgText] = useState('');
  const [msgList, setMsgList] = useState([]);
  const [btnDisable, setBtnDisable] = useState('disabled');

  const sendMessage = () => {
    setMsgList(msgList.concat({ nick: `${msgNick}`, text: `${msgText}` }));
    setBtnDisable('disabled');
    setMsgNick('');
    setMsgText('');
  };

  useEffect(() => {
    if (msgNick.length >= 1 && msgText.length > 2) {
      setBtnDisable(null);
    }
  }, [{ msgText }]);

  return (
    <>
      <StatTitle>
        <span>응원&nbsp;&nbsp;</span>한마디
      </StatTitle>
      <SummaryText>
        <span>오늘 0개</span>
        <span>전체 {msgList.length}개</span>
      </SummaryText>
      <MessageBox>
        <ul>
          {msgList.map((item, idx) => {
            return (
              <MsgItem key={idx}>
                <div className="send-nick">{item.nick}</div>
                <div className="text-bubble">
                  <p>{item.text}</p>
                </div>
              </MsgItem>
            );
          })}
        </ul>
      </MessageBox>
      <Bottom>
        <div>
          <input
            className="input-nick"
            type="text"
            maxLength="5"
            placeholder="닉네임"
            value={msgNick}
            onChange={e => {
              setMsgNick(e.target.value);
            }}
          />
          <input
            className="input-text"
            type="text"
            maxLength="30"
            placeholder="최대 30자"
            value={msgText}
            onChange={e => setMsgText(e.target.value)}
          />
          {/* disabled="disabled" 3문자 이상일때 전송가능 */}
          <button
            disabled={btnDisable}
            onClick={() => {
              sendMessage();
            }}
          >
            남기기
          </button>
        </div>
      </Bottom>
    </>
  );
};

const MessageBox = styled.div`
  margin: 0 12px;
  height: 159px;
  overflow-y: auto;
  ul {
    margin-left: 5px;
  }
`;

const MsgItem = styled.li`
  display: flex;
  margin-right: 10px;

  .send-nick {
    display: inline-block;
    color: #07f;
    line-height: 53px;
  }
  .text-bubble {
    /* margin-left: 15px; */
    flex: 2.5;
    display: inline-block;
    position: relative;
    padding: 10px;
    margin: 0.5em 0.5em 0.5em 15px;
    border: 1px solid #c3ced5;
    color: #333;
    background: #fff;
    border-radius: 15px;
    font-size: 12px;
    p {
      line-height: 18px;
    }
    ::before {
      content: '';
      position: absolute;
      top: 10px;
      bottom: auto;
      left: -8px;
      border-style: solid;
      border-width: 8px 8px 8px 0;
      border-color: transparent #c3ced5;
      display: block;
      width: 0;
    }
    ::after {
      content: '';
      position: absolute;
      top: 10px;
      bottom: auto;
      left: -7px;
      border-style: solid;
      border-width: 8px 8px 8px 0;
      border-color: transparent #fff;
      display: block;
      width: 0;
    }
  }
`;
const Bottom = styled.div`
  position: relative;
  margin: 8px 8px 8px 8px;
  padding: 8px 8px 8px 8px;
  border-top: 1px solid #f2f2f2;
  line-height: 30px;
  div {
    display: flex;
    height: 30px;
  }
  .input-nick {
    flex: 0.8;
    margin-right: 5px;
    vertical-align: middle;
    width: 15%;
    border: none;
    border-bottom: 1px solid #ccc;
    font-family: 'Noto Sans KR';
    font-size: 12px;
  }
  .input-text {
    flex: 2;
    margin-right: 5px;
    vertical-align: middle;
    width: 60%;
    border: none;
    border-bottom: 1px solid #ccc;
    font-family: 'Noto Sans KR';
    font-size: 12px;
  }
  button {
    flex: 0.5;
    vertical-align: middle;
    width: 15%;
    border: 1px solid #07f;
    background-color: transparent;
    border-radius: 5px;
    color: #07f;
    :hover {
      background-color: #07f;
      color: #fff;
    }
    :disabled {
      border: 1px solid #ccc;
      background-color: #ccc;
      color: #fff;
    }
  }
`;

export default Message;
