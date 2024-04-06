import React, { useState, useEffect } from 'react';

export default function Timer() {

    function setupCountdown(campaignSelector, startTimeMillis, endTimeMillis) {
        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        function calculateRemaining() {
            var now = new Date().getTime();
            return now >= startTimeMillis && now < endTimeMillis ? endTimeMillis - now : 0;
        }

        var didRefresh = false;
        var previousGap = calculateRemaining();

        function countdown() {
            var gap = calculateRemaining();
            var shouldRefresh = previousGap > day && gap <= day || previousGap > 0 && gap === 0;

            previousGap = gap;

            var textDay = Math.floor(gap / day);
            var textHour = Math.floor((gap % day) / hour);
            var textMinute = Math.floor((gap % hour) / minute);
            var textSecond = Math.floor((gap % minute) / second);

            if (document.querySelector(campaignSelector + ' .timer')) {
                // document.querySelector(campaignSelector + ' .day').innerText = textDay;
                document.querySelector(campaignSelector + ' .hour').innerText = textHour;
                document.querySelector(campaignSelector + ' .minute').innerText = textMinute;
                document.querySelector(campaignSelector + ' .second').innerText = textSecond;
            }

            if (shouldRefresh && !didRefresh) {
                didRefresh = true;
                setTimeout(function() {
                    window.location.reload();
                }, 30000 + Math.random() * 90000);
            }
        }

        countdown();
        setInterval(countdown, 1000);
    }



// 1705780800000 = Saturday 20 January 2024 20:00:00 (GMT)
// 1802649540000 = Sunday 14 February 2027 23:59:00 (GMT)

    useEffect(() => {
        document.addEventListener("DOMContentLoaded", function(event) {
            if (!document.querySelectorAll || !document.body.classList) {
                return;
            }

        });

        setupCountdown(".campaign-0", 1705780800000, 1802649540000);
    });




    return(<div>
        <div className="campaign-0">
                <div className="timer w-40 flex justify-center gap-2 bg-red-400 text-white py-2 rounded text-xl">
                <span className="value hour">0</span>
                <span>:</span>
                <span className="value minute">0</span>
                <span>:</span>
                <span className="value second">0</span>
            </div>
        </div>
    </div>)
}