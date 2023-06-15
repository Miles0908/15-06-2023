import "./index.css";

const TodoItem = ({ data }) => {
  const useImgPlaceHolder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAclBMVEXw7+s9PT3w7u09PTv29PLw7+n19PAwLy87Pjs9PD+mpKSjoaHy7us6Ojn6+Pfz8fA0NDMnJSS5t7bW1dOtrKvl5OIvMC0ZGhbJx8aRj45/f31JSUfd3NqWlpRcW1ocGxpubWsgIh8YFRNQUU92dHUIAACb61Q6AAADXElEQVRoge2ai46iMBRA6cNWwb7AVhQQ1Jn//8Vt1ey6o3Qdp4Vs0hNNjEM8fVzKve1kEMIsy9x7Hpx/MZv9ymIxZwsWs/rn7Xs2/9zPGPuJRCKRSCQSiUQikXgNQgi271ncUHBRlXmRlxXmYvIakohy6HtFKVXb41CKaQeBkLKhEiEEAFgul9I0JZ6wjiZ6MAzcgZgaNJ5M3yIKvoAkaieaA1Id2Ve9hamKTDEFtvfP9HYOQCsm8ItBPtNb6DCBH2/UiN42YBM/BgV4OvrXEEDRB4BsDBr1A7OJfQ/wA/P45SH6Pdgjjx9tI9tJrcBq3A+OddwIJAVd+fwmj+zfSd/4A9nx2H6P3fp30fs/r78wwDf+pojsLxVaevwqcvxn+uT1b3XkFZg3zONnDY+cAuDCePy0ILHPc6D0+GX0s0TIOzPefbv6rNdxG5Dp81gCwA6R1Zk7LiPVWAJkE9ApTvNwvX0aAn2NpylBeGkep4DRciJ9BnF9/lqA0HNts//YsecgBEKsd4ayu76bnSZQYAxjnyYLXHwIW25z3bETlQ56Yp22j30hhoJHjkBcNZSiyiUZnLeb3X6/321ajgUUvEK2Dq6iPn9s+sXccHfa5bnkhv24xrozDCFmioh2+KGu2ZdqOi04uYTbOiOY6K5xyyJCSH3ASLshJGuo2264RJxRQ17ZObBkVTEoasuClWscok0W5RlMWsls7ru8NMB2VJrtlqIG0O3xeiusrN8lx5LF2AkgbSPRQ+7PGHvMx1jThl+K9EF6M7975CF4GoQHunKj/loTzBC4DOCdDb3Vq3qwVF3QECBVDx4n38e2CtqAAwMvd/5C0FyE5Ap804/UJlwqrJvxPZfRAWiC3QM4H99yGkfloQZAvNF9OwDnQM8BUT/str4ErcPcAnw3nvF7/YFqce6ruDwwFmYR1Kf3/ODUhtCTWr3pV0EKAptzfWfhucNthvz83yvdltd7frnDiwD+/dv+fZDx3/u3vHz+ECvQT/whFgCy/+z7o/oN/QeXi459358+90EWQN1WltpSWjZX8rywryv5Dfu1u6J0l9ZV1bY6hN4hBCH2hW/8+fQXtg65/fVydSZgqAzAbSu50vbuB8f2ee6+hzBYAxKJRCKRSCQSiUQikUj8x/wCQPAxcNQTm/EAAAAASUVORK5CYII=";
  return (
    <div className="TodoItem">
      <input type="checkbox" name="check" id="check" checked={data.completed} />
      <p style={{textDecoration:data.completed && "line-through"}}>{data.title}</p>
      <img src={data?.userImg || useImgPlaceHolder} alt={data.id} />
      <p>{data?.userName || "user"}</p>
    </div>
  );
};

export default TodoItem;
