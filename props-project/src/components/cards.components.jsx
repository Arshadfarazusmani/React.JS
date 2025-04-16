import React from 'react';

function Card(props) {
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/26078331/pexels-photo-26078331/free-photo-of-person-holding-mirror-with-man-face-reflection.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {props.title}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{props.heading}</h2>
        </div>
        <p className="text-gray-300">
          {props.content}
        </p>
      </div>
        </div>
    );
}

export default Card;