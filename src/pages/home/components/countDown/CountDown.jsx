import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CountDown.scss";

export default class CountDown extends React.Component {
  getTimeDiff(t1, t2) {
    const diff = t1.getTime() - t2.getTime();
    const dd = Math.floor(diff / 1000 / 24 / 3600 / 12);
    const hh = new Date(diff).getHours();
    const mm = new Date(diff).getMinutes();
    const ss = new Date(diff).getSeconds();
    return { dd, hh, mm, ss };
  }

  constructor(props) {
    super(props);
    const now = new Date();
    const birth = new Date(now.getFullYear() + 1, 0, 15);
    const diff = this.getTimeDiff(birth, now);
    this.state = {
      ...diff
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    const now = new Date();
    const birth = new Date(now.getFullYear() + 1, 0, 15);
    this.setState({
      ...this.getTimeDiff(birth, now)
    });
  }

  render() {
    return <Clock {...this.state} />;
  }
}

function Digit({ value }) {
  const digitStyle = {
    position: "absolute",
    fontFamily: `".SFNSText", "SFProText-Regular", "SFUIText-Regular", ".SFUIText", sans-serif`,
    color: "#EE4444",
    fontSize: 31,
    letterSpacing: 0,
    lineHeight: 1.2
  };
  return (
    <div style={{ width: 18, height: 40 }}>
      <AnimatePresence>
        <motion.div
          key={value}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.95, ease: "linear" }}
          style={digitStyle}
        >
          {value}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Digits({ value }) {
  const d1 = Math.floor(value / 10);
  const d2 = Math.floor(value - d1 * 10);
  const containerStyle = {
    backgroundColor: "#fff",
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    fontWeight: "700"
  };

  return (
    <div style={containerStyle}>
      <Digit value={d1} />
      <Digit value={d2} />
    </div>
  );
}

class Clock extends React.Component {
  render() {
    return (
      <div className="box">
        <div className="dd block">
          <h2>
            <Digits value={this.props.dd} />
          </h2>
          <div>დღე</div>
        </div>
        <div className="middle">: </div>
        <div className="hh block">
          <h2>
            <Digits value={this.props.hh} />
          </h2>
          <div>საათი</div>
        </div>
        <div className="middle">: </div>
        <div className="mm block">
          <h2>
            <Digits value={this.props.mm} />
          </h2>
          <div>წუთი</div>
        </div>
        <div className="middle">: </div>
        <div className="ss block">
          <h2>
            <Digits value={this.props.ss} />
          </h2>
          <div>წამი</div>
        </div>
      </div>
    );
  }
}
