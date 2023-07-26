{
  "version": 7,
  "createdAt": 1686939873776,
  "updatedAt": 1687200089333,
  "name": "BNB",
  "id": "bnb",
  "states": {
    "panes": {
      "_id": "panes",
      "locked": false,
      "panes": {
        "chart": {
          "id": "chart",
          "name": "",
          "type": "chart",
          "markets": [
            "BINANCE_FUTURES:bnbbusd",
            "BINANCE_FUTURES:bnbusd_230630",
            "BINANCE_FUTURES:bnbusd_230929",
            "BINANCE_FUTURES:bnbusd_perp",
            "BINANCE_FUTURES:bnbusdt",
            "BINANCE:bnbbusd",
            "BINANCE:bnbtusd",
            "BINANCE:bnbusdc",
            "BINANCE:bnbusdt",
            "BITGET:BNBUSDC",
            "BITGET:BNBUSDT",
            "BITGET:BNBUSDT_UMCBL",
            "BITMEX:BNBUSD",
            "BITMEX:BNBUSDT",
            "BYBIT:BNBUSDT",
            "BYBIT:BNBUSDT-SPOT",
            "GATEIO:BNB_USDT_FUTURES",
            "KUCOIN:BNB-USDC",
            "KUCOIN:BNB-USDT",
            "KUCOIN:BNBUSDTM",
            "MEXC:BNB_USDT",
            "MEXC:BNBUSDC",
            "MEXC:BNBUSDT",
            "OKEX:BNB-USDC",
            "OKEX:BNB-USDT",
            "OKEX:BNB-USDT-SWAP"
          ],
          "zoom": 1.25
        },
        "trades": {
          "id": "trades",
          "name": "Futures Tape",
          "type": "trades",
          "markets": [
            "BINANCE_FUTURES:bnbbusd",
            "BINANCE_FUTURES:bnbusd_230630",
            "BINANCE_FUTURES:bnbusd_230929",
            "BINANCE_FUTURES:bnbusd_perp",
            "BINANCE_FUTURES:bnbusdt",
            "BITGET:BNBUSDT_UMCBL",
            "BITMEX:BNBUSD",
            "BITMEX:BNBUSDT",
            "BYBIT:BNBUSDT",
            "HUOBI:BNB-USDT",
            "KUCOIN:BNBUSDTM",
            "MEXC:BNB_USDT",
            "OKEX:BNB-USDT-SWAP",
            "PHEMEX:BNBUSD",
            "PHEMEX:BNBUSDT"
          ],
          "settings": {
            "showLiquidations": false
          },
          "zoom": 1.125
        },
        "prices": {
          "id": "prices",
          "name": "",
          "type": "prices",
          "markets": [
            "BINANCE_FUTURES:bnbbusd",
            "BINANCE_FUTURES:bnbusd_230630",
            "BINANCE_FUTURES:bnbusd_230929",
            "BINANCE_FUTURES:bnbusd_perp",
            "BINANCE_FUTURES:bnbusdt",
            "BINANCE:bnbbusd",
            "BINANCE:bnbtusd",
            "BINANCE:bnbusdc",
            "BINANCE:bnbusdt",
            "BITGET:BNBUSDC",
            "BITGET:BNBUSDT",
            "BITGET:BNBUSDT_UMCBL",
            "BITMEX:BNBUSD",
            "BITMEX:BNBUSDT",
            "BYBIT:BNBUSDT",
            "BYBIT:BNBUSDT-SPOT",
            "GATEIO:BNB_USDT_FUTURES",
            "KUCOIN:BNB-USDC",
            "KUCOIN:BNB-USDT",
            "KUCOIN:BNBUSDTM",
            "MEXC:BNB_USDT",
            "MEXC:BNBUSDC",
            "MEXC:BNBUSDT",
            "OKEX:BNB-USDC",
            "OKEX:BNB-USDT",
            "OKEX:BNB-USDT-SWAP"
          ]
        },
        "futures-tape": {
          "id": "futures-tape",
          "name": "Spot Tape",
          "type": "trades",
          "zoom": 1,
          "settings": {
            "liquidations": [
              {
                "id": "liquidation_threshold",
                "amount": 50000,
                "buyColor": "rgba(236,64,122,0.5)",
                "sellColor": "rgba(255,152,0,0.5)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
              },
              {
                "id": "liquidation_significant",
                "amount": 100000,
                "buyColor": "rgba(236,64,122,0.6)",
                "sellColor": "rgba(255,152,0,0.7)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
              },
              {
                "id": "liquidation_huge",
                "amount": 200000,
                "buyGif": "flying money",
                "sellGif": "flying money",
                "buyColor": "rgba(236,64,122,0.7)",
                "sellColor": "rgba(255,152,0,0.8)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
              },
              {
                "id": "liquidation_rare",
                "amount": 1000000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(156,39,176)",
                "sellColor": "rgb(255,235,59)",
                "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
              }
            ],
            "thresholds": [
              {
                "id": "significant",
                "amount": 10000,
                "buyColor": "rgb(194,209,197)",
                "sellColor": "rgb(179,166,166)",
                "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
                "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
              },
              {
                "id": "huge",
                "amount": 100000,
                "buyGif": "cash bullish",
                "sellGif": "cash bearish",
                "buyColor": "rgb(111,184,104)",
                "sellColor": "rgb(184,110,104)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
              },
              {
                "id": "rare",
                "amount": 1000000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(84,199,73)",
                "sellColor": "rgb(174,50,40)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
              }
            ],
            "audioThreshold": null,
            "multipliers": {},
            "maxRows": 100,
            "muted": false,
            "audioPitch": null,
            "audioVolume": null,
            "showPairs": true,
            "showTrades": true,
            "showLiquidations": false,
            "showLogos": true,
            "monochromeLogos": true,
            "showTimeAgo": true,
            "showPrices": true,
            "showHistograms": true,
            "thresholdsMultipler": 1
          },
          "markets": [
            "BINANCE:bnbbtc",
            "BINANCE:bnbbusd",
            "BINANCE:bnbusdc",
            "BINANCE:bnbusdt",
            "BITGET:BNBUSDC",
            "BITGET:BNBUSDT",
            "BYBIT:BNBUSDT-SPOT",
            "MEXC:BNBBUSD",
            "MEXC:BNBUSDC",
            "MEXC:BNBUSDT"
          ]
        },
        "chart copy 1": {
          "id": "chart copy 1",
          "name": "",
          "type": "chart",
          "markets": [
            "BINANCE_FUTURES:bnbbusd",
            "BINANCE_FUTURES:bnbusd_230630",
            "BINANCE_FUTURES:bnbusd_230929",
            "BINANCE_FUTURES:bnbusd_perp",
            "BINANCE_FUTURES:bnbusdt",
            "BINANCE:bnbbusd",
            "BINANCE:bnbtusd",
            "BINANCE:bnbusdc",
            "BINANCE:bnbusdt",
            "BITGET:BNBUSDC",
            "BITGET:BNBUSDT",
            "BITGET:BNBUSDT_UMCBL",
            "BITMEX:BNBUSD",
            "BITMEX:BNBUSDT",
            "BYBIT:BNBUSDT",
            "BYBIT:BNBUSDT-SPOT",
            "GATEIO:BNB_USDT_FUTURES",
            "KUCOIN:BNB-USDC",
            "KUCOIN:BNB-USDT",
            "KUCOIN:BNBUSDTM",
            "MEXC:BNB_USDT",
            "MEXC:BNBBUSD",
            "MEXC:BNBUSDC",
            "MEXC:BNBUSDT",
            "OKEX:BNB-USDC",
            "OKEX:BNB-USDT",
            "OKEX:BNB-USDT-SWAP"
          ]
        },
        "chart copy 2": {
          "id": "chart copy 2",
          "name": "",
          "type": "chart",
          "markets": [
            "BINANCE:bnbbusd",
            "BINANCE:bnbusdt",
            "BITMEX:BNBUSD"
          ]
        },
        "futures-tape copy 1": {
          "id": "futures-tape copy 1",
          "name": "BINANCE FUTURES BNB-USDT",
          "type": "trades",
          "zoom": 0.875,
          "settings": {
            "liquidations": [
              {
                "id": "liquidation_threshold",
                "amount": 50000,
                "buyColor": "rgba(236,64,122,0.5)",
                "sellColor": "rgba(255,152,0,0.5)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
              },
              {
                "id": "liquidation_significant",
                "amount": 100000,
                "buyColor": "rgba(236,64,122,0.6)",
                "sellColor": "rgba(255,152,0,0.7)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
              },
              {
                "id": "liquidation_huge",
                "amount": 200000,
                "buyGif": "flying money",
                "sellGif": "flying money",
                "buyColor": "rgba(236,64,122,0.7)",
                "sellColor": "rgba(255,152,0,0.8)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
              },
              {
                "id": "liquidation_rare",
                "amount": 1000000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(156,39,176)",
                "sellColor": "rgb(255,235,59)",
                "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
              }
            ],
            "thresholds": [
              {
                "id": "significant",
                "amount": 10000,
                "buyColor": "rgb(194,209,197)",
                "sellColor": "rgb(179,166,166)",
                "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
                "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
              },
              {
                "id": "huge",
                "amount": 100000,
                "buyGif": "cash bullish",
                "sellGif": "cash bearish",
                "buyColor": "rgb(111,184,104)",
                "sellColor": "rgb(184,110,104)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
              },
              {
                "id": "rare",
                "amount": 1000000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(84,199,73)",
                "sellColor": "rgb(174,50,40)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
              }
            ],
            "audioThreshold": null,
            "multipliers": {},
            "maxRows": 100,
            "muted": false,
            "audioPitch": null,
            "audioVolume": null,
            "showPairs": true,
            "showTrades": true,
            "showLiquidations": false,
            "showLogos": true,
            "monochromeLogos": true,
            "showTimeAgo": true,
            "showPrices": true,
            "showHistograms": true,
            "thresholdsMultipler": 1
          },
          "markets": [
            "BINANCE_FUTURES:bnbusdt"
          ]
        },
        "binance-futures-bnb-usdt": {
          "id": "binance-futures-bnb-usdt",
          "name": "BINANCE FUTURES BNB-USD-PERP",
          "type": "trades",
          "zoom": 1,
          "settings": {
            "liquidations": [
              {
                "id": "liquidation_threshold",
                "amount": 50000,
                "buyColor": "rgba(236,64,122,0.5)",
                "sellColor": "rgba(255,152,0,0.5)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
              },
              {
                "id": "liquidation_significant",
                "amount": 100000,
                "buyColor": "rgba(236,64,122,0.6)",
                "sellColor": "rgba(255,152,0,0.7)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
              },
              {
                "id": "liquidation_huge",
                "amount": 200000,
                "buyGif": "flying money",
                "sellGif": "flying money",
                "buyColor": "rgba(236,64,122,0.7)",
                "sellColor": "rgba(255,152,0,0.8)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
              },
              {
                "id": "liquidation_rare",
                "amount": 1000000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(156,39,176)",
                "sellColor": "rgb(255,235,59)",
                "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
              }
            ],
            "thresholds": [
              {
                "id": "significant",
                "amount": 10000,
                "buyColor": "rgb(194,209,197)",
                "sellColor": "rgb(179,166,166)",
                "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
                "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
              },
              {
                "id": "huge",
                "amount": 100000,
                "buyGif": "cash bullish",
                "sellGif": "cash bearish",
                "buyColor": "rgb(111,184,104)",
                "sellColor": "rgb(184,110,104)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
              },
              {
                "id": "rare",
                "amount": 1000000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(84,199,73)",
                "sellColor": "rgb(174,50,40)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
              }
            ],
            "audioThreshold": null,
            "multipliers": {},
            "maxRows": 100,
            "muted": false,
            "audioPitch": null,
            "audioVolume": null,
            "showPairs": true,
            "showTrades": true,
            "showLiquidations": false,
            "showLogos": true,
            "monochromeLogos": true,
            "showTimeAgo": true,
            "showPrices": true,
            "showHistograms": true,
            "thresholdsMultipler": 1
          },
          "markets": [
            "BINANCE_FUTURES:bnbusd_perp"
          ]
        },
        "binance-futures-bnb-usd-perp": {
          "id": "binance-futures-bnb-usd-perp",
          "name": "BINANCE FUTURES BNB-BUSD",
          "type": "trades",
          "zoom": 0.875,
          "settings": {
            "liquidations": [
              {
                "id": "liquidation_threshold",
                "amount": 50000,
                "buyColor": "rgba(236,64,122,0.5)",
                "sellColor": "rgba(255,152,0,0.5)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
              },
              {
                "id": "liquidation_significant",
                "amount": 100000,
                "buyColor": "rgba(236,64,122,0.6)",
                "sellColor": "rgba(255,152,0,0.7)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
              },
              {
                "id": "liquidation_huge",
                "amount": 200000,
                "buyGif": "flying money",
                "sellGif": "flying money",
                "buyColor": "rgba(236,64,122,0.7)",
                "sellColor": "rgba(255,152,0,0.8)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
              },
              {
                "id": "liquidation_rare",
                "amount": 1000000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(156,39,176)",
                "sellColor": "rgb(255,235,59)",
                "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
              }
            ],
            "thresholds": [
              {
                "id": "significant",
                "amount": 10000,
                "buyColor": "rgb(194,209,197)",
                "sellColor": "rgb(179,166,166)",
                "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
                "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
              },
              {
                "id": "huge",
                "amount": 100000,
                "buyGif": "cash bullish",
                "sellGif": "cash bearish",
                "buyColor": "rgb(111,184,104)",
                "sellColor": "rgb(184,110,104)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
              },
              {
                "id": "rare",
                "amount": 1000000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(84,199,73)",
                "sellColor": "rgb(174,50,40)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
              }
            ],
            "audioThreshold": null,
            "multipliers": {},
            "maxRows": 100,
            "muted": false,
            "audioPitch": null,
            "audioVolume": null,
            "showPairs": true,
            "showTrades": true,
            "showLiquidations": false,
            "showLogos": true,
            "monochromeLogos": true,
            "showTimeAgo": true,
            "showPrices": true,
            "showHistograms": true,
            "thresholdsMultipler": 1
          },
          "markets": [
            "BINANCE_FUTURES:bnbbusd"
          ]
        },
        "binance-futures-bnb-busd": {
          "id": "binance-futures-bnb-busd",
          "name": "BITMEX PERP BNB-USD",
          "type": "trades",
          "zoom": 1,
          "settings": {
            "liquidations": [
              {
                "id": "liquidation_threshold",
                "amount": 23000,
                "buyColor": "rgba(236,64,122,0.5)",
                "sellColor": "rgba(255,152,0,0.5)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
              },
              {
                "id": "liquidation_significant",
                "amount": 46000,
                "buyColor": "rgba(236,64,122,0.6)",
                "sellColor": "rgba(255,152,0,0.7)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
              },
              {
                "id": "liquidation_huge",
                "amount": 92000,
                "buyGif": "flying money",
                "sellGif": "flying money",
                "buyColor": "rgba(236,64,122,0.7)",
                "sellColor": "rgba(255,152,0,0.8)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
              },
              {
                "id": "liquidation_rare",
                "amount": 460000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(156,39,176)",
                "sellColor": "rgb(255,235,59)",
                "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
              }
            ],
            "thresholds": [
              {
                "id": "significant",
                "amount": 4600,
                "buyColor": "rgb(194,209,197)",
                "sellColor": "rgb(179,166,166)",
                "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
                "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
              },
              {
                "id": "huge",
                "amount": 46000,
                "buyGif": "cash bullish",
                "sellGif": "cash bearish",
                "buyColor": "rgb(111,184,104)",
                "sellColor": "rgb(184,110,104)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
              },
              {
                "id": "rare",
                "amount": 460000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(84,199,73)",
                "sellColor": "rgb(174,50,40)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
              }
            ],
            "audioThreshold": null,
            "multipliers": {},
            "maxRows": 100,
            "muted": false,
            "audioPitch": null,
            "audioVolume": null,
            "showPairs": true,
            "showTrades": true,
            "showLiquidations": false,
            "showLogos": true,
            "monochromeLogos": true,
            "showTimeAgo": true,
            "showPrices": true,
            "showHistograms": true,
            "thresholdsMultipler": 0.46
          },
          "markets": [
            "BITMEX:BNBUSD"
          ]
        },
        "prices copy 1": {
          "id": "prices copy 1",
          "name": "",
          "type": "prices",
          "markets": [
            "BINANCE_FUTURES:bnbusdt"
          ]
        },
        "prices copy 2": {
          "id": "prices copy 2",
          "name": "",
          "type": "prices",
          "settings": {
            "animateSort": true,
            "showPairs": true,
            "showVolume": true,
            "showVolumeDelta": false,
            "period": 0,
            "showChange": false,
            "showPrice": false,
            "sortType": "volume",
            "sortOrder": -1
          },
          "markets": [
            "BINANCE_FUTURES:bnbusd_perp"
          ]
        },
        "prices copy 3": {
          "id": "prices copy 3",
          "name": "",
          "type": "prices",
          "settings": {
            "animateSort": true,
            "showPairs": true,
            "showVolume": true,
            "showVolumeDelta": false,
            "period": 0,
            "showChange": false,
            "showPrice": false,
            "sortType": "volume",
            "sortOrder": -1
          },
          "markets": [
            "BINANCE_FUTURES:bnbbusd"
          ]
        },
        "binance-futures-bnb-usd-perp copy 1": {
          "id": "binance-futures-bnb-usd-perp copy 1",
          "name": "BYBIT PERP BNB-USDT",
          "type": "trades",
          "zoom": 1,
          "settings": {
            "liquidations": [
              {
                "id": "liquidation_threshold",
                "amount": 33000,
                "buyColor": "rgba(236,64,122,0.5)",
                "sellColor": "rgba(255,152,0,0.5)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
              },
              {
                "id": "liquidation_significant",
                "amount": 66000,
                "buyColor": "rgba(236,64,122,0.6)",
                "sellColor": "rgba(255,152,0,0.7)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
              },
              {
                "id": "liquidation_huge",
                "amount": 132000,
                "buyGif": "flying money",
                "sellGif": "flying money",
                "buyColor": "rgba(236,64,122,0.7)",
                "sellColor": "rgba(255,152,0,0.8)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
              },
              {
                "id": "liquidation_rare",
                "amount": 660000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(156,39,176)",
                "sellColor": "rgb(255,235,59)",
                "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
              }
            ],
            "thresholds": [
              {
                "id": "significant",
                "amount": 6600,
                "buyColor": "rgb(194,209,197)",
                "sellColor": "rgb(179,166,166)",
                "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
                "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
              },
              {
                "id": "huge",
                "amount": 66000,
                "buyGif": "cash bullish",
                "sellGif": "cash bearish",
                "buyColor": "rgb(111,184,104)",
                "sellColor": "rgb(184,110,104)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
              },
              {
                "id": "rare",
                "amount": 660000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(84,199,73)",
                "sellColor": "rgb(174,50,40)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
              }
            ],
            "audioThreshold": null,
            "multipliers": {},
            "maxRows": 100,
            "muted": false,
            "audioPitch": null,
            "audioVolume": null,
            "showPairs": true,
            "showTrades": true,
            "showLiquidations": false,
            "showLogos": true,
            "monochromeLogos": true,
            "showTimeAgo": true,
            "showPrices": true,
            "showHistograms": true,
            "thresholdsMultipler": 0.66
          },
          "markets": [
            "BYBIT:BNBUSDT"
          ]
        },
        "prices copy 4": {
          "id": "prices copy 4",
          "name": "",
          "type": "prices",
          "settings": {
            "animateSort": true,
            "showPairs": true,
            "showVolume": true,
            "showVolumeDelta": false,
            "period": 0,
            "showChange": false,
            "showPrice": false,
            "sortType": "volume",
            "sortOrder": -1
          },
          "markets": [
            "BYBIT:BNBUSDT"
          ]
        },
        "prices copy 5": {
          "id": "prices copy 5",
          "name": "",
          "type": "prices",
          "settings": {
            "animateSort": true,
            "showPairs": true,
            "showVolume": true,
            "showVolumeDelta": false,
            "period": 0,
            "showChange": false,
            "showPrice": false,
            "sortType": "volume",
            "sortOrder": -1
          },
          "markets": [
            "BITMEX:BNBUSD"
          ]
        },
        "chart copy 3": {
          "id": "chart copy 3",
          "name": "",
          "type": "chart",
          "markets": [
            "BINANCE_FUTURES:bnbbusd",
            "BINANCE_FUTURES:bnbusd_perp",
            "BINANCE_FUTURES:bnbusdt",
            "BINANCE:bnbbtc",
            "BINANCE:bnbbusd",
            "BINANCE:bnbusdt",
            "BITMEX:BNBUSD",
            "BYBIT:BNBUSDT"
          ]
        },
        "bybit-perp-bnb-usdt": {
          "id": "bybit-perp-bnb-usdt",
          "name": "BINANCE SPOT BNB-BUSD",
          "type": "trades",
          "zoom": 1,
          "settings": {
            "liquidations": [
              {
                "id": "liquidation_threshold",
                "amount": 14000,
                "buyColor": "rgba(236,64,122,0.5)",
                "sellColor": "rgba(255,152,0,0.5)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
              },
              {
                "id": "liquidation_significant",
                "amount": 28000,
                "buyColor": "rgba(236,64,122,0.6)",
                "sellColor": "rgba(255,152,0,0.7)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
              },
              {
                "id": "liquidation_huge",
                "amount": 56000,
                "buyGif": "flying money",
                "sellGif": "flying money",
                "buyColor": "rgba(236,64,122,0.7)",
                "sellColor": "rgba(255,152,0,0.8)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
              },
              {
                "id": "liquidation_rare",
                "amount": 280000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(156,39,176)",
                "sellColor": "rgb(255,235,59)",
                "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
              }
            ],
            "thresholds": [
              {
                "id": "significant",
                "amount": 2800,
                "buyColor": "rgb(194,209,197)",
                "sellColor": "rgb(179,166,166)",
                "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
                "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
              },
              {
                "id": "huge",
                "amount": 28000,
                "buyGif": "cash bullish",
                "sellGif": "cash bearish",
                "buyColor": "rgb(111,184,104)",
                "sellColor": "rgb(184,110,104)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
              },
              {
                "id": "rare",
                "amount": 280000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(84,199,73)",
                "sellColor": "rgb(174,50,40)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
              }
            ],
            "audioThreshold": null,
            "multipliers": {},
            "maxRows": 100,
            "muted": false,
            "audioPitch": null,
            "audioVolume": null,
            "showPairs": true,
            "showTrades": true,
            "showLiquidations": false,
            "showLogos": true,
            "monochromeLogos": true,
            "showTimeAgo": true,
            "showPrices": true,
            "showHistograms": true,
            "thresholdsMultipler": 0.28
          },
          "markets": [
            "BINANCE:bnbbusd"
          ]
        },
        "bybit-perp-bnb-usdt copy 1": {
          "id": "bybit-perp-bnb-usdt copy 1",
          "name": "BINANCE SPOT BNB-USDT",
          "type": "trades",
          "zoom": 1,
          "settings": {
            "liquidations": [
              {
                "id": "liquidation_threshold",
                "amount": 14000,
                "buyColor": "rgba(236,64,122,0.5)",
                "sellColor": "rgba(255,152,0,0.5)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
              },
              {
                "id": "liquidation_significant",
                "amount": 28000,
                "buyColor": "rgba(236,64,122,0.6)",
                "sellColor": "rgba(255,152,0,0.7)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
              },
              {
                "id": "liquidation_huge",
                "amount": 56000,
                "buyGif": "flying money",
                "sellGif": "flying money",
                "buyColor": "rgba(236,64,122,0.7)",
                "sellColor": "rgba(255,152,0,0.8)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
              },
              {
                "id": "liquidation_rare",
                "amount": 280000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(156,39,176)",
                "sellColor": "rgb(255,235,59)",
                "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
              }
            ],
            "thresholds": [
              {
                "id": "significant",
                "amount": 2800,
                "buyColor": "rgb(194,209,197)",
                "sellColor": "rgb(179,166,166)",
                "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
                "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
              },
              {
                "id": "huge",
                "amount": 28000,
                "buyGif": "cash bullish",
                "sellGif": "cash bearish",
                "buyColor": "rgb(111,184,104)",
                "sellColor": "rgb(184,110,104)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
              },
              {
                "id": "rare",
                "amount": 280000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(84,199,73)",
                "sellColor": "rgb(174,50,40)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
              }
            ],
            "audioThreshold": null,
            "multipliers": {},
            "maxRows": 100,
            "muted": false,
            "audioPitch": null,
            "audioVolume": null,
            "showPairs": true,
            "showTrades": true,
            "showLiquidations": false,
            "showLogos": true,
            "monochromeLogos": true,
            "showTimeAgo": true,
            "showPrices": true,
            "showHistograms": true,
            "thresholdsMultipler": 0.28
          },
          "markets": [
            "BINANCE:bnbusdt"
          ]
        },
        "prices copy 6": {
          "id": "prices copy 6",
          "name": "BINANCE SPOT BNB-USDT",
          "type": "prices",
          "settings": {
            "animateSort": true,
            "showPairs": true,
            "showVolume": true,
            "showVolumeDelta": false,
            "period": 0,
            "showChange": false,
            "showPrice": false,
            "sortType": "volume",
            "sortOrder": -1
          },
          "markets": [
            "BINANCE:bnbusdt"
          ]
        },
        "prices copy 7": {
          "id": "prices copy 7",
          "name": "BINANCE SPOT BNB-USD",
          "type": "prices",
          "settings": {
            "animateSort": true,
            "showPairs": true,
            "showVolume": true,
            "showVolumeDelta": false,
            "period": 0,
            "showChange": false,
            "showPrice": false,
            "sortType": "volume",
            "sortOrder": -1
          },
          "markets": [
            "BINANCE:bnbbusd"
          ]
        },
        "chart copy 4": {
          "id": "chart copy 4",
          "name": "BNB PREMIUM",
          "type": "chart",
          "markets": [
            "BINANCE_FUTURES:bnbbusd",
            "BINANCE_FUTURES:bnbusd_perp",
            "BINANCE_FUTURES:bnbusdt",
            "BINANCE:bnbbusd",
            "BINANCE:bnbusdt",
            "BITMEX:BNBUSD",
            "BYBIT:BNBUSDT"
          ]
        },
        "binance-spot-bnb-busd": {
          "id": "binance-spot-bnb-busd",
          "name": "KUCOIN PERP BNB-USDT-M",
          "type": "trades",
          "zoom": 1,
          "settings": {
            "liquidations": [
              {
                "id": "liquidation_threshold",
                "amount": 14000,
                "buyColor": "rgba(236,64,122,0.5)",
                "sellColor": "rgba(255,152,0,0.5)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
              },
              {
                "id": "liquidation_significant",
                "amount": 28000,
                "buyColor": "rgba(236,64,122,0.6)",
                "sellColor": "rgba(255,152,0,0.7)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
              },
              {
                "id": "liquidation_huge",
                "amount": 56000,
                "buyGif": "flying money",
                "sellGif": "flying money",
                "buyColor": "rgba(236,64,122,0.7)",
                "sellColor": "rgba(255,152,0,0.8)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
              },
              {
                "id": "liquidation_rare",
                "amount": 280000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(156,39,176)",
                "sellColor": "rgb(255,235,59)",
                "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
              }
            ],
            "thresholds": [
              {
                "id": "significant",
                "amount": 1000,
                "buyColor": "rgb(194,209,197)",
                "sellColor": "rgb(179,166,166)",
                "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
                "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
              },
              {
                "id": "huge",
                "amount": 10000,
                "buyGif": null,
                "sellGif": "cash bearish",
                "buyColor": "rgb(148,189,156)",
                "sellColor": "rgb(181,147,144)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
              },
              {
                "id": "rare",
                "amount": 30000,
                "buyGif": "cash bullish",
                "sellGif": "explosion",
                "buyColor": "rgb(111,184,104)",
                "sellColor": "rgb(184,110,104)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
              },
              {
                "id": "7i90d9n0",
                "amount": 100000,
                "buyColor": "rgb(0, 255, 0)",
                "sellColor": "rgb(255, 0, 0)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "buyGif": "explosion"
              }
            ],
            "audioThreshold": null,
            "multipliers": {},
            "maxRows": 100,
            "muted": false,
            "audioPitch": null,
            "audioVolume": null,
            "showPairs": true,
            "showTrades": true,
            "showLiquidations": false,
            "showLogos": true,
            "monochromeLogos": true,
            "showTimeAgo": true,
            "showPrices": true,
            "showHistograms": true,
            "thresholdsMultipler": 0.28
          },
          "markets": [
            "KUCOIN:BNBUSDTM"
          ]
        },
        "kucoin-bnb-usdt-m": {
          "id": "kucoin-bnb-usdt-m",
          "name": "MEXC PERP BNB-USDT",
          "type": "trades",
          "zoom": 1,
          "settings": {
            "liquidations": [
              {
                "id": "liquidation_threshold",
                "amount": 14000,
                "buyColor": "rgba(236,64,122,0.5)",
                "sellColor": "rgba(255,152,0,0.5)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
              },
              {
                "id": "liquidation_significant",
                "amount": 28000,
                "buyColor": "rgba(236,64,122,0.6)",
                "sellColor": "rgba(255,152,0,0.7)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
              },
              {
                "id": "liquidation_huge",
                "amount": 56000,
                "buyGif": "flying money",
                "sellGif": "flying money",
                "buyColor": "rgba(236,64,122,0.7)",
                "sellColor": "rgba(255,152,0,0.8)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
              },
              {
                "id": "liquidation_rare",
                "amount": 280000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(156,39,176)",
                "sellColor": "rgb(255,235,59)",
                "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
              }
            ],
            "thresholds": [
              {
                "id": "significant",
                "amount": 1000,
                "buyColor": "rgb(194,209,197)",
                "sellColor": "rgb(179,166,166)",
                "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
                "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
              },
              {
                "id": "huge",
                "amount": 10000,
                "buyGif": null,
                "sellGif": "cash bearish",
                "buyColor": "rgb(148,189,156)",
                "sellColor": "rgb(181,147,144)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
              },
              {
                "id": "rare",
                "amount": 30000,
                "buyGif": "cash bullish",
                "sellGif": "explosion",
                "buyColor": "rgb(111,184,104)",
                "sellColor": "rgb(184,110,104)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
              },
              {
                "id": "7i90d9n0",
                "amount": 100000,
                "buyColor": "rgb(0, 255, 0)",
                "sellColor": "rgb(255, 0, 0)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "buyGif": "explosion"
              }
            ],
            "audioThreshold": null,
            "multipliers": {},
            "maxRows": 100,
            "muted": false,
            "audioPitch": null,
            "audioVolume": null,
            "showPairs": true,
            "showTrades": true,
            "showLiquidations": false,
            "showLogos": true,
            "monochromeLogos": true,
            "showTimeAgo": true,
            "showPrices": true,
            "showHistograms": true,
            "thresholdsMultipler": 0.28
          },
          "markets": [
            "MEXC:BNB_USDT"
          ]
        },
        "mexc-perp-bnb-usdt": {
          "id": "mexc-perp-bnb-usdt",
          "name": "OKEX PERP BNB-USDT-SWAP",
          "type": "trades",
          "zoom": 1,
          "settings": {
            "liquidations": [
              {
                "id": "liquidation_threshold",
                "amount": 14000,
                "buyColor": "rgba(236,64,122,0.5)",
                "sellColor": "rgba(255,152,0,0.5)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
              },
              {
                "id": "liquidation_significant",
                "amount": 28000,
                "buyColor": "rgba(236,64,122,0.6)",
                "sellColor": "rgba(255,152,0,0.7)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
              },
              {
                "id": "liquidation_huge",
                "amount": 56000,
                "buyGif": "flying money",
                "sellGif": "flying money",
                "buyColor": "rgba(236,64,122,0.7)",
                "sellColor": "rgba(255,152,0,0.8)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
              },
              {
                "id": "liquidation_rare",
                "amount": 280000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(156,39,176)",
                "sellColor": "rgb(255,235,59)",
                "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
              }
            ],
            "thresholds": [
              {
                "id": "significant",
                "amount": 1000,
                "buyColor": "rgb(194,209,197)",
                "sellColor": "rgb(179,166,166)",
                "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
                "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
              },
              {
                "id": "huge",
                "amount": 10000,
                "buyGif": null,
                "sellGif": "cash bearish",
                "buyColor": "rgb(148,189,156)",
                "sellColor": "rgb(181,147,144)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
              },
              {
                "id": "rare",
                "amount": 30000,
                "buyGif": "cash bullish",
                "sellGif": "explosion",
                "buyColor": "rgb(111,184,104)",
                "sellColor": "rgb(184,110,104)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
              },
              {
                "id": "7i90d9n0",
                "amount": 100000,
                "buyColor": "rgb(0, 255, 0)",
                "sellColor": "rgb(255, 0, 0)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "buyGif": "explosion"
              }
            ],
            "audioThreshold": null,
            "multipliers": {},
            "maxRows": 100,
            "muted": false,
            "audioPitch": null,
            "audioVolume": null,
            "showPairs": true,
            "showTrades": true,
            "showLiquidations": false,
            "showLogos": true,
            "monochromeLogos": true,
            "showTimeAgo": true,
            "showPrices": true,
            "showHistograms": true,
            "thresholdsMultipler": 0.28
          },
          "markets": [
            "OKEX:BNB-USDT-SWAP"
          ]
        },
        "okex-perp-bnb-usdt-swap copy 1": {
          "id": "okex-perp-bnb-usdt-swap copy 1",
          "name": "BITGET BNB",
          "type": "trades",
          "zoom": 1,
          "settings": {
            "liquidations": [
              {
                "id": "liquidation_threshold",
                "amount": 14000,
                "buyColor": "rgba(236,64,122,0.5)",
                "sellColor": "rgba(255,152,0,0.5)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
              },
              {
                "id": "liquidation_significant",
                "amount": 28000,
                "buyColor": "rgba(236,64,122,0.6)",
                "sellColor": "rgba(255,152,0,0.7)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
              },
              {
                "id": "liquidation_huge",
                "amount": 56000,
                "buyGif": "flying money",
                "sellGif": "flying money",
                "buyColor": "rgba(236,64,122,0.7)",
                "sellColor": "rgba(255,152,0,0.8)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
              },
              {
                "id": "liquidation_rare",
                "amount": 280000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(156,39,176)",
                "sellColor": "rgb(255,235,59)",
                "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
              }
            ],
            "thresholds": [
              {
                "id": "significant",
                "amount": 1000,
                "buyColor": "rgb(194,209,197)",
                "sellColor": "rgb(179,166,166)",
                "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
                "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
              },
              {
                "id": "huge",
                "amount": 10000,
                "buyGif": null,
                "sellGif": "cash bearish",
                "buyColor": "rgb(148,189,156)",
                "sellColor": "rgb(181,147,144)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
              },
              {
                "id": "rare",
                "amount": 30000,
                "buyGif": "cash bullish",
                "sellGif": "explosion",
                "buyColor": "rgb(111,184,104)",
                "sellColor": "rgb(184,110,104)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
              },
              {
                "id": "7i90d9n0",
                "amount": 100000,
                "buyColor": "rgb(0, 255, 0)",
                "sellColor": "rgb(255, 0, 0)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "buyGif": "explosion"
              }
            ],
            "audioThreshold": null,
            "multipliers": {},
            "maxRows": 100,
            "muted": false,
            "audioPitch": null,
            "audioVolume": null,
            "showPairs": true,
            "showTrades": true,
            "showLiquidations": false,
            "showLogos": true,
            "monochromeLogos": true,
            "showTimeAgo": true,
            "showPrices": true,
            "showHistograms": true,
            "thresholdsMultipler": 0.28
          },
          "markets": [
            "BITGET:BNBUSDT_UMCBL"
          ]
        },
        "binance-spot-bnb-usd": {
          "id": "binance-spot-bnb-usd",
          "name": "KUCOIN",
          "type": "prices",
          "settings": {
            "animateSort": true,
            "showPairs": true,
            "showVolume": true,
            "showVolumeDelta": false,
            "period": 0,
            "showChange": false,
            "showPrice": false,
            "sortType": "volume",
            "sortOrder": -1
          },
          "markets": [
            "KUCOIN:BNBUSDTM"
          ]
        },
        "binance-spot-bnb-usd copy 1": {
          "id": "binance-spot-bnb-usd copy 1",
          "name": "MEXC",
          "type": "prices",
          "settings": {
            "animateSort": true,
            "showPairs": true,
            "showVolume": true,
            "showVolumeDelta": false,
            "period": 0,
            "showChange": false,
            "showPrice": false,
            "sortType": "volume",
            "sortOrder": -1
          },
          "markets": [
            "MEXC:BNB_USDT"
          ]
        },
        "binance-spot-bnb-usd copy 2": {
          "id": "binance-spot-bnb-usd copy 2",
          "name": "OKEX",
          "type": "prices",
          "settings": {
            "animateSort": true,
            "showPairs": true,
            "showVolume": true,
            "showVolumeDelta": false,
            "period": 0,
            "showChange": false,
            "showPrice": false,
            "sortType": "volume",
            "sortOrder": -1
          },
          "markets": [
            "OKEX:BNB-USDT-SWAP"
          ]
        },
        "binance-spot-bnb-usd copy 3": {
          "id": "binance-spot-bnb-usd copy 3",
          "name": "BITGET",
          "type": "prices",
          "settings": {
            "animateSort": true,
            "showPairs": true,
            "showVolume": true,
            "showVolumeDelta": false,
            "period": 0,
            "showChange": false,
            "showPrice": false,
            "sortType": "volume",
            "sortOrder": -1
          },
          "markets": [
            "BITGET:BNBUSDT_UMCBL"
          ]
        },
        "phemex-perp-bnb-usdt": {
          "id": "phemex-perp-bnb-usdt",
          "name": "PHEMEX PERP BNB-USD",
          "type": "trades",
          "zoom": 0.875,
          "settings": {
            "liquidations": [
              {
                "id": "liquidation_threshold",
                "amount": 500,
                "buyColor": "rgba(236,64,122,0.5)",
                "sellColor": "rgba(255,152,0,0.5)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
              },
              {
                "id": "liquidation_significant",
                "amount": 1000,
                "buyColor": "rgba(236,64,122,0.6)",
                "sellColor": "rgba(255,152,0,0.7)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
              },
              {
                "id": "liquidation_huge",
                "amount": 2000,
                "buyGif": "flying money",
                "sellGif": "flying money",
                "buyColor": "rgba(236,64,122,0.7)",
                "sellColor": "rgba(255,152,0,0.8)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
              },
              {
                "id": "liquidation_rare",
                "amount": 10000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(156,39,176)",
                "sellColor": "rgb(255,235,59)",
                "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
              }
            ],
            "thresholds": [
              {
                "id": "significant",
                "amount": 35.71,
                "buyColor": "rgb(194,209,197)",
                "sellColor": "rgb(179,166,166)",
                "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
                "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
              },
              {
                "id": "huge",
                "amount": 357.14,
                "buyGif": null,
                "sellGif": null,
                "buyColor": "rgb(194,209,197)",
                "sellColor": "rgb(179,166,166)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
              },
              {
                "id": "rare",
                "amount": 1071.43,
                "buyGif": null,
                "sellGif": null,
                "buyColor": "rgb(194,209,197)",
                "sellColor": "rgb(179,166,166)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
              },
              {
                "id": "7i90d9n0",
                "amount": 10000,
                "buyColor": "rgb(148,189,156)",
                "sellColor": "rgb(181,147,144)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "buyGif": null
              },
              {
                "id": "2of2w87y",
                "amount": 50000,
                "buyColor": "rgb(0, 255, 0)",
                "sellColor": "rgb(255, 0, 0)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "buyGif": "cash bullish",
                "sellGif": "cash bearish"
              }
            ],
            "audioThreshold": null,
            "multipliers": {},
            "maxRows": 100,
            "muted": false,
            "audioPitch": null,
            "audioVolume": null,
            "showPairs": true,
            "showTrades": true,
            "showLiquidations": false,
            "showLogos": true,
            "monochromeLogos": true,
            "showTimeAgo": true,
            "showPrices": true,
            "showHistograms": true,
            "thresholdsMultipler": 0.01
          },
          "markets": [
            "PHEMEX:BNBUSD"
          ]
        },
        "phemex-perp-bnb-usd": {
          "id": "phemex-perp-bnb-usd",
          "name": "HUOBI PERP BNB-USDT",
          "type": "trades",
          "zoom": 0.875,
          "settings": {
            "liquidations": [
              {
                "id": "liquidation_threshold",
                "amount": 500,
                "buyColor": "rgba(236,64,122,0.5)",
                "sellColor": "rgba(255,152,0,0.5)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
              },
              {
                "id": "liquidation_significant",
                "amount": 1000,
                "buyColor": "rgba(236,64,122,0.6)",
                "sellColor": "rgba(255,152,0,0.7)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
              },
              {
                "id": "liquidation_huge",
                "amount": 2000,
                "buyGif": "flying money",
                "sellGif": "flying money",
                "buyColor": "rgba(236,64,122,0.7)",
                "sellColor": "rgba(255,152,0,0.8)",
                "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
              },
              {
                "id": "liquidation_rare",
                "amount": 10000,
                "buyGif": "explosion",
                "sellGif": "explosion",
                "buyColor": "rgb(156,39,176)",
                "sellColor": "rgb(255,235,59)",
                "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
                "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
              }
            ],
            "thresholds": [
              {
                "id": "significant",
                "amount": 35.71,
                "buyColor": "rgb(194,209,197)",
                "sellColor": "rgb(179,166,166)",
                "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
                "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
              },
              {
                "id": "huge",
                "amount": 357.14,
                "buyGif": null,
                "sellGif": null,
                "buyColor": "rgb(194,209,197)",
                "sellColor": "rgb(179,166,166)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
              },
              {
                "id": "rare",
                "amount": 1071.43,
                "buyGif": null,
                "sellGif": null,
                "buyColor": "rgb(194,209,197)",
                "sellColor": "rgb(179,166,166)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
              },
              {
                "id": "7i90d9n0",
                "amount": 10000,
                "buyColor": "rgb(148,189,156)",
                "sellColor": "rgb(181,147,144)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "buyGif": null
              },
              {
                "id": "2of2w87y",
                "amount": 50000,
                "buyColor": "rgb(0, 255, 0)",
                "sellColor": "rgb(255, 0, 0)",
                "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
                "buyGif": "cash bullish",
                "sellGif": "cash bearish"
              }
            ],
            "audioThreshold": null,
            "multipliers": {},
            "maxRows": 100,
            "muted": false,
            "audioPitch": null,
            "audioVolume": null,
            "showPairs": true,
            "showTrades": true,
            "showLiquidations": false,
            "showLogos": true,
            "monochromeLogos": true,
            "showTimeAgo": true,
            "showPrices": true,
            "showHistograms": true,
            "thresholdsMultipler": 0.01
          },
          "markets": [
            "HUOBI:BNB-USDT"
          ]
        },
        "prices copy 8": {
          "id": "prices copy 8",
          "name": "HUOBI",
          "type": "prices",
          "markets": [
            "HUOBI:BNB-USDT"
          ]
        },
        "phemex": {
          "id": "phemex",
          "name": "PHEMEX",
          "type": "prices",
          "settings": {
            "animateSort": false,
            "showPairs": true,
            "showVolume": true,
            "showVolumeDelta": false,
            "period": 0,
            "showChange": false,
            "showPrice": false,
            "sortType": "change",
            "sortOrder": -1
          },
          "markets": [
            "PHEMEX:BNBUSD"
          ]
        }
      },
      "layout": [
        {
          "i": "chart",
          "type": "chart",
          "x": 0,
          "y": 0,
          "w": 20,
          "h": 24,
          "moved": false
        },
        {
          "i": "trades",
          "type": "trades",
          "x": 20,
          "y": 0,
          "w": 4,
          "h": 9,
          "moved": false
        },
        {
          "i": "prices",
          "type": "prices",
          "y": 9,
          "x": 20,
          "w": 4,
          "h": 6,
          "moved": false
        },
        {
          "i": "futures-tape",
          "type": "trades",
          "w": 4,
          "h": 9,
          "y": 15,
          "x": 20,
          "moved": false
        },
        {
          "i": "chart copy 1",
          "type": "chart",
          "y": 24,
          "x": 0,
          "w": 13,
          "h": 24,
          "moved": false
        },
        {
          "i": "chart copy 2",
          "type": "chart",
          "y": 24,
          "x": 13,
          "w": 11,
          "h": 24,
          "moved": false
        },
        {
          "i": "futures-tape copy 1",
          "type": "trades",
          "w": 4,
          "h": 11,
          "y": 49,
          "x": 4,
          "moved": false
        },
        {
          "i": "binance-futures-bnb-usdt",
          "type": "trades",
          "w": 4,
          "h": 11,
          "y": 49,
          "x": 12,
          "moved": false
        },
        {
          "i": "binance-futures-bnb-usd-perp",
          "type": "trades",
          "w": 4,
          "h": 11,
          "y": 49,
          "x": 8,
          "moved": false
        },
        {
          "i": "binance-futures-bnb-busd",
          "type": "trades",
          "w": 4,
          "h": 11,
          "y": 73,
          "x": 4,
          "moved": false
        },
        {
          "i": "prices copy 1",
          "type": "prices",
          "y": 48,
          "x": 4,
          "w": 4,
          "h": 1,
          "moved": false
        },
        {
          "i": "prices copy 2",
          "type": "prices",
          "w": 4,
          "h": 1,
          "y": 48,
          "x": 12,
          "moved": false
        },
        {
          "i": "prices copy 3",
          "type": "prices",
          "w": 4,
          "h": 1,
          "y": 48,
          "x": 8,
          "moved": false
        },
        {
          "i": "binance-futures-bnb-usd-perp copy 1",
          "type": "trades",
          "w": 4,
          "h": 11,
          "y": 49,
          "x": 16,
          "moved": false
        },
        {
          "i": "prices copy 4",
          "type": "prices",
          "w": 4,
          "h": 1,
          "y": 48,
          "x": 16,
          "moved": false
        },
        {
          "i": "prices copy 5",
          "type": "prices",
          "w": 4,
          "h": 1,
          "y": 72,
          "x": 4,
          "moved": false
        },
        {
          "i": "chart copy 3",
          "type": "chart",
          "y": 48,
          "x": 0,
          "w": 4,
          "h": 12,
          "moved": false
        },
        {
          "i": "bybit-perp-bnb-usdt",
          "type": "trades",
          "w": 4,
          "h": 11,
          "y": 61,
          "x": 4,
          "moved": false
        },
        {
          "i": "bybit-perp-bnb-usdt copy 1",
          "type": "trades",
          "w": 4,
          "h": 11,
          "y": 61,
          "x": 0,
          "moved": false
        },
        {
          "i": "prices copy 6",
          "type": "prices",
          "w": 4,
          "h": 1,
          "y": 60,
          "x": 0,
          "moved": false
        },
        {
          "i": "prices copy 7",
          "type": "prices",
          "w": 4,
          "h": 1,
          "y": 60,
          "x": 4,
          "moved": false
        },
        {
          "i": "chart copy 4",
          "type": "chart",
          "y": 72,
          "x": 8,
          "w": 16,
          "h": 12,
          "moved": false
        },
        {
          "i": "binance-spot-bnb-busd",
          "type": "trades",
          "w": 4,
          "h": 11,
          "y": 61,
          "x": 8,
          "moved": false
        },
        {
          "i": "kucoin-bnb-usdt-m",
          "type": "trades",
          "w": 4,
          "h": 11,
          "y": 61,
          "x": 12,
          "moved": false
        },
        {
          "i": "mexc-perp-bnb-usdt",
          "type": "trades",
          "w": 4,
          "h": 11,
          "y": 61,
          "x": 16,
          "moved": false
        },
        {
          "i": "okex-perp-bnb-usdt-swap copy 1",
          "type": "trades",
          "w": 4,
          "h": 11,
          "y": 61,
          "x": 20,
          "moved": false
        },
        {
          "i": "binance-spot-bnb-usd",
          "type": "prices",
          "w": 4,
          "h": 1,
          "y": 60,
          "x": 8,
          "moved": false
        },
        {
          "i": "binance-spot-bnb-usd copy 1",
          "type": "prices",
          "w": 4,
          "h": 1,
          "y": 60,
          "x": 12,
          "moved": false
        },
        {
          "i": "binance-spot-bnb-usd copy 2",
          "type": "prices",
          "w": 4,
          "h": 1,
          "y": 60,
          "x": 16,
          "moved": false
        },
        {
          "i": "binance-spot-bnb-usd copy 3",
          "type": "prices",
          "w": 4,
          "h": 1,
          "y": 60,
          "x": 20,
          "moved": false
        },
        {
          "i": "phemex-perp-bnb-usdt",
          "type": "trades",
          "w": 4,
          "h": 11,
          "y": 49,
          "x": 20,
          "moved": false
        },
        {
          "i": "phemex-perp-bnb-usd",
          "type": "trades",
          "w": 4,
          "h": 11,
          "y": 73,
          "x": 0,
          "moved": false
        },
        {
          "i": "prices copy 8",
          "type": "prices",
          "y": 72,
          "x": 0,
          "w": 4,
          "h": 1,
          "moved": false
        },
        {
          "i": "phemex",
          "type": "prices",
          "w": 4,
          "h": 1,
          "y": 48,
          "x": 20,
          "moved": false
        }
      ]
    },
    "chart": {
      "indicatorsErrors": {},
      "indicators": {
        "liquidations": {
          "enabled": true,
          "name": "Liquidations",
          "description": "Liquidations by side",
          "script": "plothistogram(lbuy, color=options.upColor)\nplothistogram(-lsell, color=options.downColor)",
          "options": {
            "priceFormat": {
              "type": "volume"
            },
            "priceScaleId": "volume_liquidations",
            "upColor": "rgb(181,147,144)",
            "downColor": "rgb(148,189,156)",
            "scaleMargins": {
              "top": 0.04,
              "bottom": 0.84
            },
            "visible": true
          },
          "id": "liquidations",
          "createdAt": 1673293819993,
          "updatedAt": null,
          "series": [
            "liquidations",
            "r9v0i8ee"
          ],
          "unsavedChanges": true
        },
        "price": {
          "enabled": true,
          "name": "Price",
          "script": "plotcandlestick(options.useHeikinAshi ? avg_heikinashi(bar) : options.useGaps ? avg_ohlc_with_gaps(bar) : avg_ohlc(bar))",
          "options": {
            "priceScaleId": "right",
            "priceFormat": {
              "auto": true,
              "precision": 2,
              "minMove": 0.01
            },
            "priceLineVisible": true,
            "lastValueVisible": true,
            "borderVisible": true,
            "upColor": "rgb(148,189,156)",
            "downColor": "rgb(181,147,144)",
            "borderUpColor": "rgb(148,189,156)",
            "borderDownColor": "rgb(181,147,144)",
            "wickUpColor": "rgb(148,189,156)",
            "wickDownColor": "rgb(181,147,144)",
            "useGaps": false,
            "useHeikinAshi": false,
            "scaleMargins": {
              "top": 0.17,
              "bottom": 0.58
            }
          },
          "id": "price",
          "createdAt": 1673293819993,
          "updatedAt": null,
          "series": [
            "price"
          ],
          "unsavedChanges": true
        },
        "volume": {
          "enabled": true,
          "name": "Volume",
          "description": "Volume + delta",
          "script": "if (upColor === 0) {\n  if (options.showDelta) {\n    upColor = options.upBgColor\n    downColor = options.downBgColor\n  } else {\n    upColor = options.upColor\n    downColor = options.downColor\n  }\n}\n\nif (options.showDelta) {\n  plothistogram({ time: time, value: Math.abs(vbuy-vsell), color: vbuy - vsell > 0 ? options.upColor : options.downColor})\n}\n\nplothistogram({ time: time, value: vbuy + vsell, color: vbuy > vsell ? upColor : downColor })",
          "options": {
            "priceFormat": {
              "type": "volume"
            },
            "upColor": "rgb(148,189,156)",
            "downColor": "rgb(181,147,144)",
            "priceScaleId": "volume",
            "scaleMargins": {
              "top": 0.84,
              "bottom": 0
            },
            "showDelta": true,
            "upBgColor": "rgba(111,184,104,0.5)",
            "downBgColor": "rgba(184,110,104,0.5)",
            "visible": true
          },
          "id": "volume",
          "createdAt": 1673293819993,
          "updatedAt": null,
          "series": [
            "volume",
            "kxon7zua"
          ],
          "unsavedChanges": true
        },
        "spot-delta": {
          "script": "_vbuy = (BINANCE:bnbusdt.vbuy+BINANCE:bnbbusd.vbuy)\r\n_vsell = (BINANCE:bnbusdt.vsell+BINANCE:bnbbusd.vsell)\r\n\r\nvolume = _vbuy+ _vsell\r\na = sma(Math.pow(volume, 2), options.length)\r\nb = Math.pow(sum(volume, options.length), 2) / Math.pow(options.length, 2)\r\nstdev = Math.sqrt(a - b)\r\nbasis = sma(volume, options.length)\r\ndev = 1 * stdev\r\ntreshold = basis + dev\r\n\r\ndelta = _vbuy - _vsell\r\npos_delta = delta > 0\r\nweighted_vol = volume > treshold\r\nohlc = avg_ohlc(bar)\r\nclose_above = ohlc.close > ohlc.open\r\n\r\ncol = pos_delta ? (weighted_vol ? (close_above ? options.upColorHighVol : options.divColorSigUp) : (close_above ? options.upColorLowVol : options.divColorSmallUp)) : (weighted_vol ? (close_above ? options.divColorSigDown : options.downColorHighVol) : (close_above ? options.divColorSmallDown : options.downColorLowVol))\r\n\r\nplothistogram({ time: time, value: (delta), color: col, overlay: true }, title=\"Spot Delta\")",
          "name": "Spot Delta",
          "priceScaleId": "right",
          "id": "spot-delta",
          "options": {
            "priceScaleId": "spot-delta",
            "scaleMargins": {
              "top": 0.43,
              "bottom": 0.37
            },
            "upColorLowVol": "rgb(148,189,156)",
            "upColorHighVol": "rgb(111,184,104)",
            "downColorLowVol": "rgb(181,147,144)",
            "downColorHighVol": "rgb(184,110,104)",
            "divColorSmallUp": "rgb(148,189,156)",
            "divColorSmallDown": "rgb(181,147,144)",
            "divColorSigUp": "rgb(111,184,104)",
            "divColorSigDown": "rgb(184,110,104)",
            "length": 14
          },
          "series": [
            "spot-delta"
          ],
          "displayName": "Spot Delta",
          "unsavedChanges": true
        },
        "futures-delta1": {
          "script": "_vbuy = (BINANCE_FUTURES:bnbusd.vbuy+BINANCE_FUTURES:bnbusd_perp.vbuy+BINANCE_FUTURES:bnbusdt.vbuy+BITMEX:BNBUSD.vbuy+BYBIT:BNBUSDT.vbuy)\r\n_vsell = (BINANCE_FUTURES:bnbusd.vsell+BINANCE_FUTURES:bnbusd_perp.vsell+BINANCE_FUTURES:bnbusdt.vsell+BITMEX:BNBUSD.vsell+BYBIT:BNBUSDT.vsell)\r\n\r\nvolume = _vbuy+ _vsell\r\na = sma(Math.pow(volume, 2), options.length)\r\nb = Math.pow(sum(volume, options.length), 2) / Math.pow(options.length, 2)\r\nstdev = Math.sqrt(a - b)\r\nbasis = sma(volume, options.length)\r\ndev = 1 * stdev\r\ntreshold = basis + dev\r\n\r\ndelta = _vbuy - _vsell\r\npos_delta = delta > 0\r\nweighted_vol = volume > treshold\r\nohlc = avg_ohlc(bar)\r\nclose_above = ohlc.close > ohlc.open\r\n\r\ncol = pos_delta ? (weighted_vol ? (close_above ? options.upColorHighVol : options.divColorSigUp) : (close_above ? options.upColorLowVol : options.divColorSmallUp)) : (weighted_vol ? (close_above ? options.divColorSigDown : options.downColorHighVol) : (close_above ? options.divColorSmallDown : options.downColorLowVol))\r\n\r\nplothistogram({ time: time, value: (delta), color: col, overlay: true }, title=\"Futures Delta\")",
          "name": "Futures Delta",
          "priceScaleId": "right",
          "id": "futures-delta1",
          "options": {
            "priceScaleId": "futures-delta1",
            "scaleMargins": {
              "top": 0.65,
              "bottom": 0.16
            },
            "upColorLowVol": "rgb(148,189,156)",
            "upColorHighVol": "rgb(111,184,104)",
            "downColorLowVol": "rgb(181,147,144)",
            "downColorHighVol": "rgb(184,110,104)",
            "divColorSmallUp": "rgb(148,189,156)",
            "divColorSmallDown": "rgb(181,147,144)",
            "divColorSigUp": "rgb(111,184,104)",
            "divColorSigDown": "rgb(184,110,104)"
          },
          "series": [
            "futures-delta1"
          ],
          "displayName": "Futures Delta",
          "unsavedChanges": true
        },
        "spot-cvd1": {
          "script": "_vbuy = (BINANCE:bnbusdt.vbuy+BINANCE:bnbbusd.vbuy)\n_vsell = (BINANCE:bnbusdt.vsell+BINANCE:bnbbusd.vsell)\nline(cum((_vbuy)- (_vsell)), title=Spot CVD)",
          "name": "Spot CVD",
          "priceScaleId": "right",
          "id": "spot-cvd1",
          "options": {
            "priceScaleId": "spot-cvd1",
            "scaleMargins": {
              "top": 0.43,
              "bottom": 0.37
            }
          },
          "series": [
            "spot-cvd1"
          ],
          "displayName": "Spot CVD",
          "unsavedChanges": true
        },
        "futures-cvd1": {
          "script": "_vbuy = (BINANCE_FUTURES:bnbusd.vbuy+BINANCE_FUTURES:bnbusd_perp.vbuy+BINANCE_FUTURES:bnbusdt.vbuy+BITMEX:BNBUSD.vbuy+BYBIT:BNBUSDT.vbuy)\n_vsell = (BINANCE_FUTURES:bnbusd.vsell+BINANCE_FUTURES:bnbusd_perp.vsell+BINANCE_FUTURES:bnbusdt.vsell+BITMEX:BNBUSD.vsell+BYBIT:BNBUSDT.vsell)\n\nline(cum((_vbuy)- (_vsell)), title=Futures CVD)",
          "name": "Futures CVD",
          "priceScaleId": "right",
          "id": "futures-cvd1",
          "options": {
            "priceScaleId": "futures-cvd1",
            "scaleMargins": {
              "top": 0.65,
              "bottom": 0.16
            }
          },
          "series": [
            "futures-cvd1"
          ],
          "displayName": "Futures CVD",
          "unsavedChanges": true
        }
      },
      "priceScales": {
        "right": {
          "scaleMargins": {
            "top": 0.17,
            "bottom": 0.58
          },
          "priceFormat": {
            "precision": 2,
            "minMove": 0.01
          },
          "indicators": [
            "Price"
          ]
        },
        "cvd": {
          "scaleMargins": {
            "top": 0.84,
            "bottom": 0
          }
        },
        "volume_liquidations": {
          "scaleMargins": {
            "top": 0.04,
            "bottom": 0.84
          },
          "indicators": [
            "Liquidations"
          ]
        },
        "volume": {
          "scaleMargins": {
            "top": 0.84,
            "bottom": 0
          }
        },
        "delta-perps": {
          "scaleMargins": {
            "top": 0.75,
            "bottom": 0.12
          }
        },
        "Bybit-delta": {
          "scaleMargins": {
            "top": 0.75,
            "bottom": 0.12
          }
        },
        "untitled": {
          "scaleMargins": {
            "top": 0.49,
            "bottom": 0.31
          },
          "indicators": [
            "Spot Delta"
          ]
        },
        "spot-delta": {
          "scaleMargins": {
            "top": 0.43,
            "bottom": 0.37
          },
          "indicators": [
            "Spot Delta"
          ]
        },
        "futures-delta1": {
          "scaleMargins": {
            "top": 0.65,
            "bottom": 0.16
          },
          "indicators": [
            "Futures Delta"
          ]
        },
        "spot-cvd1": {
          "scaleMargins": {
            "top": 0.43,
            "bottom": 0.37
          },
          "indicators": [
            "Spot CVD"
          ]
        },
        "futures-cvd1": {
          "scaleMargins": {
            "top": 0.65,
            "bottom": 0.16
          },
          "indicators": [
            "Futures CVD"
          ]
        }
      },
      "layouting": false,
      "showIndicators": false,
      "timeframe": "3600",
      "refreshRate": 1000,
      "showAlerts": true,
      "showAlertsLabel": true,
      "showLegend": true,
      "fillGapsWithEmpty": true,
      "showHorizontalGridlines": false,
      "horizontalGridlinesColor": "rgba(255,255,255,.1)",
      "showVerticalGridlines": false,
      "verticalGridlinesColor": "rgba(255,255,255,.1)",
      "showWatermark": true,
      "watermarkColor": "rgba(255,255,255,.1)",
      "showBorder": true,
      "borderColor": null,
      "showLeftScale": false,
      "showRightScale": true,
      "showTimeScale": true,
      "hiddenMarkets": {},
      "barSpacing": 5.507820489374781,
      "navigationState": {
        "tab": "script",
        "optionsQuery": "",
        "fontSizePx": 14
      },
      "_id": "chart"
    },
    "settings": {
      "_id": "settings",
      "preferQuoteCurrencySize": true,
      "aggregationLength": 1,
      "calculateSlippage": null,
      "wsProxyUrl": null,
      "disableAnimations": false,
      "autoHideHeaders": true,
      "autoHideNames": true,
      "theme": "dark",
      "backgroundColor": "rgb(60,61,62)",
      "textColor": "",
      "buyColor": "rgb(100, 157, 102)",
      "sellColor": "rgb(239, 67, 82)",
      "timezoneOffset": 0,
      "useAudio": true,
      "audioVolume": 1,
      "audioFilters": {
        "PingPongDelay": true,
        "Compressor": false,
        "Delay": false,
        "HighPassFilter": true,
        "LowPassFilter": false
      },
      "sections": [
        "timeframe-minutes",
        "search-extras",
        "search-exchanges",
        "search-type",
        "search-quotes",
        "timeframe-hours",
        "settings-colors",
        "indicator-left-other",
        "settings-other",
        "settings-audio",
        "indicator-left-colors",
        "indicator-right-colors",
        "settings-workspaces",
        "timeframe-seconds",
        "indicator-right-format",
        "indicator-right-scale",
        "indicator-right-default",
        "settings-exchanges"
      ],
      "searchTypes": {
        "recentSearches": true,
        "historical": false,
        "spots": true,
        "perpetuals": true,
        "futures": true,
        "normalize": false,
        "mergeUsdt": false,
        "recent": false
      },
      "searchQuotes": {
        "USD": true,
        "USDT": true,
        "UST": true,
        "USDC": true,
        "USDD": true,
        "BUSD": true,
        "OTHERS": true,
        "GBP": true,
        "AUD": true,
        "EUR": true,
        "BNB": true,
        "ETH": true,
        "BTC": true
      },
      "previousSearchSelections": [
        {
          "label": "AGGR:SENTIMENT",
          "markets": [
            "AGGR:SENTIMENT"
          ],
          "count": 0
        },
        {
          "label": "PHEMEX:BNBUSD",
          "markets": [
            "PHEMEX:BNBUSD"
          ],
          "count": 0
        },
        {
          "label": "PHEMEX:BNBUSDT",
          "markets": [
            "PHEMEX:BNBUSDT"
          ],
          "count": 0
        },
        {
          "label": "HUOBI:BNB-USDT",
          "markets": [
            "HUOBI:BNB-USDT"
          ],
          "count": 0
        },
        {
          "label": "BNBUSD",
          "markets": [
            "BINANCE_FUTURES:bnbbusd",
            "BINANCE_FUTURES:bnbusd_230630",
            "BINANCE_FUTURES:bnbusd_230929",
            "BINANCE_FUTURES:bnbusd_perp",
            "BINANCE_FUTURES:bnbusdt",
            "BITGET:BNBUSDT_UMCBL",
            "BITMEX:BNBUSD",
            "BITMEX:BNBUSDT",
            "BYBIT:BNBUSDT",
            "HUOBI:BNB-USDT",
            "KUCOIN:BNBUSDTM",
            "MEXC:BNB_USDT",
            "OKEX:BNB-USDT-SWAP",
            "PHEMEX:BNBUSD",
            "PHEMEX:BNBUSDT"
          ],
          "count": 15
        },
        {
          "label": "BITGET:BNBUSDT_UMCBL",
          "markets": [
            "BITGET:BNBUSDT_UMCBL"
          ],
          "count": 0
        },
        {
          "label": "OKEX:BNB-USDT-SWAP",
          "markets": [
            "OKEX:BNB-USDT-SWAP"
          ],
          "count": 0
        },
        {
          "label": "MEXC:BNB_USDT",
          "markets": [
            "MEXC:BNB_USDT"
          ],
          "count": 0
        },
        {
          "label": "KUCOIN:BNBUSDTM",
          "markets": [
            "KUCOIN:BNBUSDTM"
          ],
          "count": 0
        },
        {
          "label": "BITMEX:BNBUSDT",
          "markets": [
            "BITMEX:BNBUSDT"
          ],
          "count": 0
        },
        {
          "label": "BNBUSD",
          "markets": [
            "BINANCE:bnbbusd",
            "BINANCE:bnbusdt",
            "BITMEX:BNBUSD"
          ],
          "count": 3
        },
        {
          "label": "BNBUSD",
          "markets": [
            "BINANCE_FUTURES:bnbbusd",
            "BINANCE_FUTURES:bnbusd_perp",
            "BINANCE_FUTURES:bnbusdt",
            "BINANCE:bnbbusd",
            "BINANCE:bnbusdt",
            "BITMEX:BNBUSD",
            "BYBIT:BNBUSDT"
          ],
          "count": 7
        },
        {
          "label": "BINANCE:bnbbusd",
          "markets": [
            "BINANCE:bnbbusd"
          ],
          "count": 0
        },
        {
          "label": "BINANCE:bnbusdt",
          "markets": [
            "BINANCE:bnbusdt"
          ],
          "count": 0
        },
        {
          "label": "BNBUSD+BNBBTC",
          "markets": [
            "BINANCE_FUTURES:bnbbusd",
            "BINANCE_FUTURES:bnbusd_perp",
            "BINANCE_FUTURES:bnbusdt",
            "BINANCE:bnbbtc",
            "BINANCE:bnbbusd",
            "BINANCE:bnbusdt",
            "BITMEX:BNBUSD",
            "BYBIT:BNBUSDT"
          ],
          "count": 8
        },
        {
          "label": "BITMEX:BNBUSD",
          "markets": [
            "BITMEX:BNBUSD"
          ],
          "count": 0
        },
        {
          "label": "BYBIT:BNBUSDT",
          "markets": [
            "BYBIT:BNBUSDT"
          ],
          "count": 0
        },
        {
          "label": "BNBTUSD",
          "markets": [
            "BINANCE:bnbtusd",
            "MEXC:BNBTUSD"
          ],
          "count": 2
        },
        {
          "label": "BINANCE_FUTURES:bnbbusd",
          "markets": [
            "BINANCE_FUTURES:bnbbusd"
          ],
          "count": 0
        },
        {
          "label": "BINANCE_FUTURES:bnbusd_perp",
          "markets": [
            "BINANCE_FUTURES:bnbusd_perp"
          ],
          "count": 0
        },
        {
          "label": "BINANCE_FUTURES:bnbusdt",
          "markets": [
            "BINANCE_FUTURES:bnbusdt"
          ],
          "count": 0
        },
        {
          "label": "BINANCE:bnbbtc",
          "markets": [
            "BINANCE:bnbbtc"
          ],
          "count": 0
        },
        {
          "label": "BNBUSD+BNBTUSD",
          "markets": [
            "BINANCE_US:bnbusd",
            "BINANCE_US:bnbusdt",
            "BINANCE:bnbbusd",
            "BINANCE:bnbtusd",
            "BINANCE:bnbusdc",
            "BINANCE:bnbusdt",
            "BITGET:BNBUSDC",
            "BITGET:BNBUSDT",
            "BITMEX:BNBUSD",
            "BYBIT:BNBUSDT-SPOT",
            "MEXC:BNBBUSD",
            "MEXC:BNBTUSD",
            "MEXC:BNBUSDC",
            "MEXC:BNBUSDT"
          ],
          "count": 14
        },
        {
          "label": "BNBUSD+BNBTUSD",
          "markets": [
            "BINANCE_US:bnbusd",
            "BINANCE_US:bnbusdt",
            "BINANCE:bnbbusd",
            "BINANCE:bnbtusd",
            "BINANCE:bnbusdc",
            "BINANCE:bnbusdt",
            "BITGET:BNBUSDC",
            "BITGET:BNBUSDT",
            "BYBIT:BNBUSDT-SPOT",
            "MEXC:BNBBUSD",
            "MEXC:BNBTUSD",
            "MEXC:BNBUSDC",
            "MEXC:BNBUSDT"
          ],
          "count": 13
        },
        {
          "label": "BNBUSD+BNBTUSD+BNBUSDTFUTURES",
          "markets": [
            "BINANCE_FUTURES:bnbbusd",
            "BINANCE_FUTURES:bnbusd_230630",
            "BINANCE_FUTURES:bnbusd_230929",
            "BINANCE_FUTURES:bnbusd_perp",
            "BINANCE_FUTURES:bnbusdt",
            "BINANCE:bnbbusd",
            "BINANCE:bnbtusd",
            "BINANCE:bnbusdc",
            "BINANCE:bnbusdt",
            "BITGET:BNBUSDC",
            "BITGET:BNBUSDT",
            "BITGET:BNBUSDT_UMCBL",
            "BITMEX:BNBUSD",
            "BITMEX:BNBUSDT",
            "BYBIT:BNBUSDT",
            "BYBIT:BNBUSDT-SPOT",
            "GATEIO:BNB_USDT_FUTURES",
            "KUCOIN:BNB-USDC",
            "KUCOIN:BNB-USDT",
            "KUCOIN:BNBUSDTM",
            "MEXC:BNB_USDT",
            "MEXC:BNBBUSD",
            "MEXC:BNBUSDC",
            "MEXC:BNBUSDT",
            "OKEX:BNB-USDC",
            "OKEX:BNB-USDT",
            "OKEX:BNB-USDT-SWAP"
          ],
          "count": 27
        },
        {
          "label": "BNBUSD+BNBTUSD",
          "markets": [
            "BINANCE:bnbbusd",
            "BINANCE:bnbtusd",
            "BINANCE:bnbusdc",
            "BINANCE:bnbusdt",
            "BITGET:BNBUSDC",
            "BITGET:BNBUSDT",
            "BYBIT:BNBUSDT-SPOT",
            "MEXC:BNBBUSD",
            "MEXC:BNBTUSD",
            "MEXC:BNBUSDC",
            "MEXC:BNBUSDT"
          ],
          "count": 11
        },
        {
          "label": "BNBBTC+BNBUSD",
          "markets": [
            "BINANCE:bnbbtc",
            "BINANCE:bnbbusd",
            "BINANCE:bnbusdc",
            "BINANCE:bnbusdt",
            "BITGET:BNBUSDC",
            "BITGET:BNBUSDT",
            "BYBIT:BNBUSDT-SPOT",
            "MEXC:BNBBUSD",
            "MEXC:BNBUSDC",
            "MEXC:BNBUSDT"
          ],
          "count": 10
        },
        {
          "label": "BNBUSD",
          "markets": [
            "BINANCE_FUTURES:bnbbusd",
            "BINANCE_FUTURES:bnbusd_230630",
            "BINANCE_FUTURES:bnbusd_230929",
            "BINANCE_FUTURES:bnbusd_perp",
            "BINANCE_FUTURES:bnbusdt",
            "BITGET:BNBUSDT_UMCBL",
            "BITMEX:BNBUSD",
            "BITMEX:BNBUSDT",
            "BYBIT:BNBUSDT",
            "KUCOIN:BNBUSDTM",
            "MEXC:BNB_USDT",
            "OKEX:BNB-USDT-SWAP"
          ],
          "count": 12
        },
        {
          "label": "BNBBTC+BNBUSD",
          "markets": [
            "BINANCE:bnbbtc",
            "BINANCE:bnbusdc",
            "BINANCE:bnbusdt",
            "BITGET:BNBUSDC",
            "BITGET:BNBUSDT",
            "BYBIT:BNBUSDT-SPOT",
            "MEXC:BNBUSDC",
            "MEXC:BNBUSDT"
          ],
          "count": 8
        },
        {
          "label": "BNBUSD+BNBTUSD",
          "markets": [
            "BINANCE_FUTURES:bnbbusd",
            "BINANCE_FUTURES:bnbusd_230630",
            "BINANCE_FUTURES:bnbusd_230929",
            "BINANCE_FUTURES:bnbusd_perp",
            "BINANCE_FUTURES:bnbusdt",
            "BINANCE:bnbbusd",
            "BINANCE:bnbtusd",
            "BINANCE:bnbusdc",
            "BINANCE:bnbusdt",
            "BITGET:BNBUSDC",
            "BITGET:BNBUSDT",
            "BITGET:BNBUSDT_UMCBL",
            "BITMEX:BNBUSD",
            "BITMEX:BNBUSDT",
            "BYBIT:BNBUSDT",
            "BYBIT:BNBUSDT-SPOT",
            "KUCOIN:BNB-USDC",
            "KUCOIN:BNB-USDT",
            "KUCOIN:BNBUSDTM",
            "MEXC:BNB_USDT",
            "MEXC:BNBUSDC",
            "MEXC:BNBUSDT",
            "OKEX:BNB-USDC",
            "OKEX:BNB-USDT",
            "OKEX:BNB-USDT-SWAP"
          ],
          "count": 25
        },
        {
          "label": "BNBUSD+BNBTUSD+BNBUSDTFUTURES",
          "markets": [
            "BINANCE_FUTURES:bnbbusd",
            "BINANCE_FUTURES:bnbusd_230630",
            "BINANCE_FUTURES:bnbusd_230929",
            "BINANCE_FUTURES:bnbusd_perp",
            "BINANCE_FUTURES:bnbusdt",
            "BINANCE:bnbbusd",
            "BINANCE:bnbtusd",
            "BINANCE:bnbusdc",
            "BINANCE:bnbusdt",
            "BITGET:BNBUSDC",
            "BITGET:BNBUSDT",
            "BITGET:BNBUSDT_UMCBL",
            "BITMEX:BNBUSD",
            "BITMEX:BNBUSDT",
            "BYBIT:BNBUSDT",
            "BYBIT:BNBUSDT-SPOT",
            "GATEIO:BNB_USDT_FUTURES",
            "KUCOIN:BNB-USDC",
            "KUCOIN:BNB-USDT",
            "KUCOIN:BNBUSDTM",
            "MEXC:BNB_USDT",
            "MEXC:BNBUSDC",
            "MEXC:BNBUSDT",
            "OKEX:BNB-USDC",
            "OKEX:BNB-USDT",
            "OKEX:BNB-USDT-SWAP"
          ],
          "count": 26
        },
        {
          "label": "BNBUSD+BNBTUSD",
          "markets": [
            "BINANCE_FUTURES:bnbbusd",
            "BINANCE_FUTURES:bnbusdt",
            "BINANCE:bnbbusd",
            "BINANCE:bnbtusd",
            "BINANCE:bnbusdc",
            "BINANCE:bnbusdt",
            "BITGET:BNBUSDC",
            "BITGET:BNBUSDT",
            "BITGET:BNBUSDT_UMCBL",
            "BITMEX:BNBUSD",
            "BITMEX:BNBUSDT",
            "BYBIT:BNBUSDT",
            "BYBIT:BNBUSDT-SPOT",
            "KUCOIN:BNB-USDC",
            "KUCOIN:BNB-USDT",
            "KUCOIN:BNBUSDTM",
            "MEXC:BNB_USDT",
            "MEXC:BNBUSDC",
            "MEXC:BNBUSDT",
            "OKEX:BNB-USDC",
            "OKEX:BNB-USDT",
            "OKEX:BNB-USDT-SWAP"
          ],
          "count": 22
        }
      ],
      "searchExchanges": {
        "AGGR": true,
        "BINANCE": true,
        "BINANCE_FUTURES": true,
        "BINANCE_US": true,
        "BITFINEX": true,
        "BITGET": true,
        "BITMEX": true,
        "BITSTAMP": true,
        "BYBIT": true,
        "COINBASE": true,
        "DERIBIT": true,
        "DYDX": true,
        "GATEIO": true,
        "HITBTC": true,
        "HUOBI": true,
        "KRAKEN": true,
        "KUCOIN": true,
        "MEXC": true,
        "OKEX": true,
        "PHEMEX": true,
        "POLONIEX": true,
        "UNISWAP": true
      },
      "timeframes": [
        {
          "label": "1s",
          "value": "1"
        },
        {
          "label": "3s",
          "value": "3"
        },
        {
          "label": "5s",
          "value": "5"
        },
        {
          "label": "10s",
          "value": "10"
        },
        {
          "label": "15s",
          "value": "15"
        },
        {
          "label": "30s",
          "value": "30"
        },
        {
          "label": "1m",
          "value": "60"
        },
        {
          "label": "3m",
          "value": "180"
        },
        {
          "label": "5m",
          "value": "300"
        },
        {
          "label": "15m",
          "value": "900"
        },
        {
          "label": "21m",
          "value": "1260"
        },
        {
          "label": "30m",
          "value": "1800"
        },
        {
          "label": "1h",
          "value": "3600"
        },
        {
          "label": "2h",
          "value": "7200"
        },
        {
          "label": "4h",
          "value": "14400"
        },
        {
          "label": "6h",
          "value": "21600"
        },
        {
          "label": "8h",
          "value": "28800"
        },
        {
          "label": "12h",
          "value": "43200"
        },
        {
          "label": "1d",
          "value": "86400"
        },
        {
          "label": "21 ticks",
          "value": "21t"
        },
        {
          "label": "50 ticks",
          "value": "50t"
        },
        {
          "label": "89 ticks",
          "value": "89t"
        },
        {
          "label": "100 ticks",
          "value": "100t"
        },
        {
          "label": "200 ticks",
          "value": "200t"
        },
        {
          "label": "610 ticks",
          "value": "610t"
        },
        {
          "label": "1000 ticks",
          "value": "1000t"
        },
        {
          "label": "1597 ticks",
          "value": "1597t"
        }
      ],
      "favoriteTimeframes": {},
      "normalizeWatermarks": true,
      "alerts": false,
      "alertsColor": "rgb(255,0,0)",
      "alertsLineStyle": 2,
      "alertsLineWidth": 2,
      "alertsClick": false,
      "alertSound": null,
      "showThresholdsAsTable": true
    },
    "prices": {
      "animateSort": true,
      "showPairs": true,
      "showVolume": true,
      "showVolumeDelta": true,
      "period": 0,
      "showChange": true,
      "showPrice": true,
      "sortType": "volume",
      "sortOrder": -1,
      "_id": "prices"
    },
    "trades": {
      "liquidations": [
        {
          "id": "liquidation_threshold",
          "amount": 50000,
          "buyColor": "rgba(236,64,122,0.5)",
          "sellColor": "rgba(255,152,0,0.5)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
        },
        {
          "id": "liquidation_significant",
          "amount": 100000,
          "buyColor": "rgba(236,64,122,0.6)",
          "sellColor": "rgba(255,152,0,0.7)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
        },
        {
          "id": "liquidation_huge",
          "amount": 200000,
          "buyGif": "flying money",
          "sellGif": "flying money",
          "buyColor": "rgba(236,64,122,0.7)",
          "sellColor": "rgba(255,152,0,0.8)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
        },
        {
          "id": "liquidation_rare",
          "amount": 1000000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(156,39,176)",
          "sellColor": "rgb(255,235,59)",
          "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
        }
      ],
      "thresholds": [
        {
          "id": "significant",
          "amount": 5000,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
          "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
        },
        {
          "id": "3a76n0hy",
          "amount": 30000,
          "buyColor": "rgb(148,189,156)",
          "sellColor": "rgb(181,147,144)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "ezk5boel",
          "amount": 62000,
          "buyColor": "rgb(148,189,156)",
          "sellColor": "rgb(181,147,144)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": "cash bullish",
          "sellGif": "cash bearish"
        },
        {
          "id": "huge",
          "amount": 100000,
          "buyGif": "cash bullish",
          "sellGif": "cash bearish",
          "buyColor": "rgb(111,184,104)",
          "sellColor": "rgb(184,110,104)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
        },
        {
          "id": "rare",
          "amount": 300000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(84,199,73)",
          "sellColor": "rgb(174,50,40)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        }
      ],
      "audioThreshold": null,
      "multipliers": {},
      "maxRows": 100,
      "muted": false,
      "audioPitch": null,
      "audioVolume": null,
      "showPairs": true,
      "showTrades": true,
      "showLiquidations": false,
      "showLogos": true,
      "monochromeLogos": true,
      "showTimeAgo": true,
      "showPrices": true,
      "showHistograms": true,
      "thresholdsMultipler": 1,
      "_id": "trades"
    },
    "futures-tape": {
      "liquidations": [
        {
          "id": "liquidation_threshold",
          "amount": 5000,
          "buyColor": "rgba(236,64,122,0.5)",
          "sellColor": "rgba(255,152,0,0.5)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
        },
        {
          "id": "liquidation_significant",
          "amount": 10000,
          "buyColor": "rgba(236,64,122,0.6)",
          "sellColor": "rgba(255,152,0,0.7)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
        },
        {
          "id": "liquidation_huge",
          "amount": 20000,
          "buyGif": "flying money",
          "sellGif": "flying money",
          "buyColor": "rgba(236,64,122,0.7)",
          "sellColor": "rgba(255,152,0,0.8)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
        },
        {
          "id": "liquidation_rare",
          "amount": 100000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(156,39,176)",
          "sellColor": "rgb(255,235,59)",
          "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
        }
      ],
      "thresholds": [
        {
          "id": "a2ktjqts",
          "amount": 1000,
          "buyColor": "rgb(212,220,213)",
          "sellColor": "rgb(225,208,208)",
          "buyAudio": "",
          "sellAudio": ""
        },
        {
          "id": "significant",
          "amount": 5000,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
          "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
        },
        {
          "id": "bywju6ya",
          "amount": 29000,
          "buyColor": "rgb(147,184,154)",
          "sellColor": "rgb(207,155,155)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "huge",
          "amount": 62000,
          "buyGif": "cash bullish",
          "sellGif": "cash bearish",
          "buyColor": "rgb(111,184,104)",
          "sellColor": "rgb(184,110,104)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
        },
        {
          "id": "rare",
          "amount": 200000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(84,199,73)",
          "sellColor": "rgb(174,50,40)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        }
      ],
      "audioThreshold": null,
      "multipliers": {},
      "maxRows": 100,
      "muted": false,
      "audioPitch": null,
      "audioVolume": null,
      "showPairs": true,
      "showTrades": true,
      "showLiquidations": false,
      "showLogos": true,
      "monochromeLogos": true,
      "showTimeAgo": true,
      "showPrices": true,
      "showHistograms": true,
      "thresholdsMultipler": 0.1,
      "_id": "futures-tape"
    },
    "chart copy 1": {
      "indicatorsErrors": {},
      "indicators": {
        "liquidations": {
          "enabled": true,
          "name": "Liquidations",
          "description": "Liquidations by side",
          "script": "plothistogram(lbuy, color=options.upColor)\nplothistogram(-lsell, color=options.downColor)",
          "options": {
            "priceScaleId": "liquidations",
            "priceFormat": {
              "type": "price",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "upColor": "rgb(184,110,104)",
            "downColor": "rgb(111,184,104)",
            "scaleMargins": {
              "top": 0.01,
              "bottom": 0.91
            },
            "lastValueVisible": false,
            "visible": true
          },
          "id": "liquidations",
          "createdAt": 1657349169744,
          "updatedAt": 1686940819587,
          "unsavedChanges": false,
          "series": [
            "liquidations",
            "w39fmkoj"
          ],
          "displayName": "Liquidations",
          "navigationState": {
            "sections": [
              "position",
              "colors",
              "defaultOptions",
              "format"
            ],
            "tab": "#options",
            "optionsQuery": "",
            "fontSize": 1
          },
          "uses": 1,
          "preview": {}
        },
        "price": {
          "enabled": true,
          "name": "Price",
          "script": "plotcandlestick(options.useHeikinAshi ? avg_heikinashi(bar) : options.useGaps ? avg_ohlc_with_gaps(bar) : avg_ohlc(bar))",
          "options": {
            "priceScaleId": "right",
            "priceFormat": {
              "auto": true,
              "precision": 2,
              "minMove": 0.01
            },
            "priceLineVisible": true,
            "lastValueVisible": true,
            "borderVisible": true,
            "upColor": "rgb(148,189,156)",
            "downColor": "rgb(181,147,144)",
            "borderUpColor": "rgb(148,189,156)",
            "borderDownColor": "rgb(181,147,144)",
            "wickUpColor": "rgb(148,189,156)",
            "wickDownColor": "rgb(181,147,144)",
            "useGaps": false,
            "useHeikinAshi": false,
            "scaleMargins": {
              "top": 0.06,
              "bottom": 0.57
            },
            "visible": true
          },
          "id": "price",
          "createdAt": 1657340969806,
          "updatedAt": 1686940997452,
          "series": [
            "price"
          ],
          "unsavedChanges": false,
          "displayName": "Price",
          "navigationState": {
            "sections": [
              "position",
              "colors"
            ],
            "tab": 0,
            "optionsQuery": "",
            "fontSize": 1
          },
          "preview": {}
        },
        "binance-futures-bnb-usd": {
          "script": "_vbuy = (BINANCE_FUTURES:bnbusd_perp.vbuy)\r\n_vsell = (BINANCE_FUTURES:bnbusd_perp.vsell)\r\n\r\nvolume = _vbuy+ _vsell\r\na = sma(Math.pow(volume, 2), options.length)\r\nb = Math.pow(sum(volume, options.length), 2) / Math.pow(options.length, 2)\r\nstdev = Math.sqrt(a - b)\r\nbasis = sma(volume, options.length)\r\ndev = 1 * stdev\r\ntreshold = basis + dev\r\n\r\ndelta = _vbuy - _vsell\r\npos_delta = delta > 0\r\nweighted_vol = volume > treshold\r\nohlc = avg_ohlc(bar)\r\nclose_above = ohlc.close > ohlc.open\r\n\r\ncol = pos_delta ? (weighted_vol ? (close_above ? options.upColorHighVol : options.divColorSigUp) : (close_above ? options.upColorLowVol : options.divColorSmallUp)) : (weighted_vol ? (close_above ? options.divColorSigDown : options.downColorHighVol) : (close_above ? options.divColorSmallDown : options.downColorLowVol))\r\n\r\nplothistogram({ time: time, value: (delta), color: col, overlay: true }, title=\"Binance Futures BNB-USD-Perp\")",
          "name": "Binance Futures BNB-USD",
          "priceScaleId": "right",
          "id": "binance-futures-bnb-usd",
          "options": {
            "priceScaleId": "binance-futures-bnb-usd",
            "scaleMargins": {
              "top": 0.45,
              "bottom": 0.42
            },
            "upColorLowVol": "rgb(148,189,156)",
            "upColorHighVol": "rgb(111,184,104)",
            "downColorLowVol": "rgb(181,147,144)",
            "downColorHighVol": "rgb(184,110,104)",
            "divColorSmallUp": "rgb(148,189,156)",
            "divColorSmallDown": "rgb(181,147,144)",
            "divColorSigUp": "rgb(111,184,104)",
            "divColorSigDown": "rgb(184,110,104)",
            "visible": true,
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": true
            }
          },
          "series": [
            "binance-futures-bnb-usd"
          ],
          "displayName": "Binance Futures BNB-USD",
          "unsavedChanges": true
        },
        "binance-futures-bnb-usdt": {
          "script": "_vbuy = (BINANCE_FUTURES:bnbusdt.vbuy)\r\n\r\n_vsell = (BINANCE_FUTURES:bnbusdt.vsell)\r\n\r\nvolume = _vbuy+ _vsell\r\na = sma(Math.pow(volume, 2), options.length)\r\nb = Math.pow(sum(volume, options.length), 2) / Math.pow(options.length, 2)\r\nstdev = Math.sqrt(a - b)\r\nbasis = sma(volume, options.length)\r\ndev = 1 * stdev\r\ntreshold = basis + dev\r\n\r\ndelta = _vbuy - _vsell\r\npos_delta = delta > 0\r\nweighted_vol = volume > treshold\r\nohlc = avg_ohlc(bar)\r\nclose_above = ohlc.close > ohlc.open\r\n\r\ncol = pos_delta ? (weighted_vol ? (close_above ? options.upColorHighVol : options.divColorSigUp) : (close_above ? options.upColorLowVol : options.divColorSmallUp)) : (weighted_vol ? (close_above ? options.divColorSigDown : options.downColorHighVol) : (close_above ? options.divColorSmallDown : options.downColorLowVol))\r\n\r\nplothistogram({ time: time, value: (delta), color: col, overlay: true }, title=\"Binance Futures BNB-USDT\")",
          "name": "Binance Futures BNB-USDT ",
          "priceScaleId": "right",
          "id": "binance-futures-bnb-usdt",
          "options": {
            "priceScaleId": "binance-futures-bnb-usd-copy-1",
            "scaleMargins": {
              "top": 0.59,
              "bottom": 0.29
            },
            "upColorLowVol": "rgb(148,189,156)",
            "upColorHighVol": "rgb(111,184,104)",
            "downColorLowVol": "rgb(181,147,144)",
            "downColorHighVol": "rgb(184,110,104)",
            "divColorSmallUp": "rgb(148,189,156)",
            "divColorSmallDown": "rgb(181,147,144)",
            "divColorSigUp": "rgb(111,184,104)",
            "divColorSigDown": "rgb(184,110,104)",
            "visible": true,
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": true
            }
          },
          "series": [
            "binance-futures-bnb-usdt"
          ],
          "displayName": "Binance Futures BNB-USDT ",
          "unsavedChanges": true
        },
        "binance-futures-bnb-busd": {
          "script": "_vbuy = (BINANCE_FUTURES:bnbbusd.vbuy)\r\n\r\n_vsell = (BINANCE_FUTURES:bnbbusd.vsell)\r\n\r\nvolume = _vbuy+ _vsell\r\na = sma(Math.pow(volume, 2), options.length)\r\nb = Math.pow(sum(volume, options.length), 2) / Math.pow(options.length, 2)\r\nstdev = Math.sqrt(a - b)\r\nbasis = sma(volume, options.length)\r\ndev = 1 * stdev\r\ntreshold = basis + dev\r\n\r\ndelta = _vbuy - _vsell\r\npos_delta = delta > 0\r\nweighted_vol = volume > treshold\r\nohlc = avg_ohlc(bar)\r\nclose_above = ohlc.close > ohlc.open\r\n\r\ncol = pos_delta ? (weighted_vol ? (close_above ? options.upColorHighVol : options.divColorSigUp) : (close_above ? options.upColorLowVol : options.divColorSmallUp)) : (weighted_vol ? (close_above ? options.divColorSigDown : options.downColorHighVol) : (close_above ? options.divColorSmallDown : options.downColorLowVol))\r\n\r\nplothistogram({ time: time, value: (delta), color: col, overlay: true }, title=\"Binance Futures BNB-BUSD\")",
          "name": "Binance Futures BNB-BUSD",
          "priceScaleId": "right",
          "id": "binance-futures-bnb-busd",
          "options": {
            "priceScaleId": "binance-futures-bnb-usdt-copy-1",
            "scaleMargins": {
              "top": 0.73,
              "bottom": 0.15
            },
            "upColorLowVol": "rgb(148,189,156)",
            "upColorHighVol": "rgb(111,184,104)",
            "downColorLowVol": "rgb(181,147,144)",
            "downColorHighVol": "rgb(184,110,104)",
            "divColorSmallUp": "rgb(148,189,156)",
            "divColorSmallDown": "rgb(181,147,144)",
            "divColorSigUp": "rgb(111,184,104)",
            "divColorSigDown": "rgb(184,110,104)",
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": true
            }
          },
          "series": [
            "binance-futures-bnb-busd"
          ],
          "displayName": "Binance Futures BNB-BUSD",
          "unsavedChanges": true
        },
        "futures-bnb-usd-perp-cvd": {
          "script": "c = cum((BINANCE_FUTURES:bnbusd_perp.vbuy)- (BINANCE_FUTURES:bnbusd_perp.vsell))\n\nline(c, title=CVD)",
          "name": "Futures BNB-USD-Perp-CVD",
          "priceScaleId": "right",
          "id": "futures-bnb-usd-perp-cvd",
          "options": {
            "priceScaleId": "futures-bnb-usd-perp-cvd",
            "scaleMargins": {
              "top": 0.45,
              "bottom": 0.42
            },
            "lastValueVisible": true,
            "priceLineVisible": false,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": true
            }
          },
          "series": [
            "futures-bnb-usd-perp-cvd"
          ],
          "displayName": "Futures BNB-USD-Perp-CVD",
          "unsavedChanges": true
        },
        "futures-bnb-usdt-cvd": {
          "script": "c = cum((BINANCE_FUTURES:bnbusdt.vbuy)- (BINANCE_FUTURES:bnbusdt.vsell))\n\nline(c, title=CVD)",
          "name": "Futures BNB-USDT-CVD ",
          "priceScaleId": "right",
          "id": "futures-bnb-usdt-cvd",
          "options": {
            "priceScaleId": "futures-bnb-usdt-cvd",
            "scaleMargins": {
              "top": 0.59,
              "bottom": 0.29
            },
            "visible": true,
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": true
            }
          },
          "series": [
            "futures-bnb-usdt-cvd"
          ],
          "displayName": "Futures BNB-USDT-CVD ",
          "unsavedChanges": true
        },
        "bybit-bnb-usdt": {
          "script": "_vbuy = (BYBIT:BNBUSDT.vbuy)\r\n\r\n_vsell = (BYBIT:BNBUSDT.vsell)\r\n\r\nvolume = _vbuy+ _vsell\r\na = sma(Math.pow(volume, 2), options.length)\r\nb = Math.pow(sum(volume, options.length), 2) / Math.pow(options.length, 2)\r\nstdev = Math.sqrt(a - b)\r\nbasis = sma(volume, options.length)\r\ndev = 1 * stdev\r\ntreshold = basis + dev\r\n\r\ndelta = _vbuy - _vsell\r\npos_delta = delta > 0\r\nweighted_vol = volume > treshold\r\nohlc = avg_ohlc(bar)\r\nclose_above = ohlc.close > ohlc.open\r\n\r\ncol = pos_delta ? (weighted_vol ? (close_above ? options.upColorHighVol : options.divColorSigUp) : (close_above ? options.upColorLowVol : options.divColorSmallUp)) : (weighted_vol ? (close_above ? options.divColorSigDown : options.downColorHighVol) : (close_above ? options.divColorSmallDown : options.downColorLowVol))\r\n\r\nplothistogram({ time: time, value: (delta), color: col, overlay: true }, title=\"BYBIT BNB-USDT\")",
          "name": "BYBIT BNB-USDT ",
          "priceScaleId": "right",
          "id": "bybit-bnb-usdt",
          "options": {
            "priceScaleId": "binance-futures-bnb-tusd",
            "scaleMargins": {
              "top": 0.87,
              "bottom": 0.01
            },
            "upColorLowVol": "rgb(148,189,156)",
            "upColorHighVol": "rgb(111,184,104)",
            "downColorLowVol": "rgb(181,147,144)",
            "downColorHighVol": "rgb(184,110,104)",
            "divColorSmallUp": "rgb(148,189,156)",
            "divColorSmallDown": "rgb(181,147,144)",
            "divColorSigUp": "rgb(111,184,104)",
            "divColorSigDown": "rgb(184,110,104)",
            "visible": true,
            "length": 14,
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": true
            }
          },
          "series": [
            "bybit-bnb-usdt"
          ],
          "displayName": "BYBIT BNB-USDT ",
          "unsavedChanges": true
        },
        "bybit-bnb-usdt-cvd": {
          "script": "c = cum((BYBIT:BNBUSDT.vbuy)- (BYBIT:BNBUSDT.vsell))\n\nline(c, title=CVD)",
          "name": "BYBIT BNB-USDT-CVD",
          "priceScaleId": "right",
          "id": "bybit-bnb-usdt-cvd",
          "options": {
            "priceScaleId": "futures-bnb-busd-copy-1",
            "scaleMargins": {
              "top": 0.87,
              "bottom": 0.01
            },
            "visible": true,
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": true
            }
          },
          "series": [
            "bybit-bnb-usdt-cvd"
          ],
          "displayName": "BYBIT BNB-USDT-CVD",
          "unsavedChanges": true
        },
        "futures-bnb-busd-cvd": {
          "script": "c = cum((BINANCE_FUTURES:bnbbusd.vbuy)- (BINANCE_FUTURES:bnbbusd.vsell))\n\nline(c, title=CVD)",
          "name": "Futures BNB-BUSD-CVD",
          "priceScaleId": "right",
          "id": "futures-bnb-busd-cvd",
          "options": {
            "priceScaleId": "futures-bnb-usdt-cvd-copy-1",
            "scaleMargins": {
              "top": 0.73,
              "bottom": 0.15
            },
            "visible": true,
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": true
            }
          },
          "series": [
            "futures-bnb-busd-cvd"
          ],
          "displayName": "Futures BNB-BUSD-CVD",
          "unsavedChanges": true
        },
        "total-futures-cvd": {
          "script": "line(cum((BINANCE_FUTURES:bnbusd_perp.vbuy+BINANCE_FUTURES:bnbusd_perp.vbuy+BINANCE_FUTURES:bnbusdt.vbuy+BITMEX:BNBUSD.vbuy+BYBIT:BNBUSDT.vbuy)- (BINANCE_FUTURES:bnbusd_perp.vsell+BINANCE_FUTURES:bnbusd_perp.vsell+BINANCE_FUTURES:bnbusdt.vsell+BITMEX:BNBUSD.vsell+BYBIT:BNBUSDT.vsell)), title=Futures CVD)",
          "name": "Total Futures CVD",
          "priceScaleId": "right",
          "id": "total-futures-cvd",
          "options": {
            "priceScaleId": "total-futures-cvd",
            "scaleMargins": {
              "top": 0.06,
              "bottom": 0.57
            },
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": true
            }
          },
          "series": [
            "total-futures-cvd"
          ],
          "displayName": "Total Futures CVD",
          "unsavedChanges": true
        }
      },
      "priceScales": {
        "right": {
          "scaleMargins": {
            "top": 0.06,
            "bottom": 0.57
          },
          "indicators": [
            "Price"
          ]
        },
        "cvd": {
          "scaleMargins": {
            "top": 0.84,
            "bottom": 0
          }
        },
        "liquidations": {
          "scaleMargins": {
            "top": 0.01,
            "bottom": 0.91
          },
          "indicators": [
            "Liquidations"
          ]
        },
        "volume": {
          "scaleMargins": {
            "top": 0.84,
            "bottom": 0
          }
        },
        "binance-futures-bnb-usd": {
          "scaleMargins": {
            "top": 0.45,
            "bottom": 0.42
          },
          "indicators": [
            "Binance Futures BNB-USD"
          ]
        },
        "binance-futures-bnb-usd-copy-1": {
          "scaleMargins": {
            "top": 0.59,
            "bottom": 0.29
          },
          "indicators": [
            "Binance Futures BNB-USDT "
          ]
        },
        "binance-futures-bnb-usdt-copy-1": {
          "scaleMargins": {
            "top": 0.73,
            "bottom": 0.15
          },
          "indicators": [
            "Binance Futures BNB-BUSD"
          ]
        },
        "binance-futures-bnb-busd-copy-1": {
          "scaleMargins": {
            "top": 0.87,
            "bottom": 0.01
          },
          "indicators": [
            "Binance Futures BNB-BUSD copy 1"
          ]
        },
        "binance-futures-bnb-tusd": {
          "scaleMargins": {
            "top": 0.87,
            "bottom": 0.01
          },
          "indicators": [
            "BYBIT BNB-USDT "
          ]
        },
        "futures-bnb-usd-perp-cvd": {
          "scaleMargins": {
            "top": 0.45,
            "bottom": 0.42
          },
          "indicators": [
            "Futures BNB-USD-Perp-CVD"
          ]
        },
        "futures-bnb-usd-perp-cvd-copy-1": {
          "scaleMargins": {
            "top": 0.45,
            "bottom": 0.42
          }
        },
        "futures-bnb-usdt-cvd": {
          "scaleMargins": {
            "top": 0.59,
            "bottom": 0.29
          },
          "indicators": [
            "Futures BNB-USDT-CVD "
          ]
        },
        "futures-bnb-usdt-cvd-copy-1": {
          "scaleMargins": {
            "top": 0.73,
            "bottom": 0.15
          },
          "indicators": [
            "Futures BNB-USDT-CVD  copy 1"
          ]
        },
        "futures-bnb-busd-copy-1": {
          "scaleMargins": {
            "top": 0.87,
            "bottom": 0.01
          },
          "indicators": [
            "Futures BNB-BUSD copy 1"
          ]
        },
        "total-futures-cvd": {
          "scaleMargins": {
            "top": 0.06,
            "bottom": 0.57
          },
          "indicators": [
            "Total Futures CVD"
          ]
        }
      },
      "layouting": false,
      "showIndicators": false,
      "timeframe": "900",
      "refreshRate": 1000,
      "showAlerts": true,
      "showAlertsLabel": true,
      "showLegend": true,
      "fillGapsWithEmpty": true,
      "showHorizontalGridlines": false,
      "horizontalGridlinesColor": "rgba(255,255,255,.1)",
      "showVerticalGridlines": false,
      "verticalGridlinesColor": "rgba(255,255,255,.1)",
      "showWatermark": true,
      "watermarkColor": "rgba(255,255,255,.1)",
      "showBorder": true,
      "borderColor": null,
      "showLeftScale": false,
      "showRightScale": true,
      "showTimeScale": true,
      "hiddenMarkets": {},
      "barSpacing": 2.6068026709065792,
      "navigationState": {
        "tab": "options",
        "optionsQuery": "",
        "fontSizePx": 14
      },
      "_id": "chart copy 1"
    },
    "chart copy 2": {
      "indicatorsErrors": {},
      "indicators": {
        "price": {
          "enabled": true,
          "name": "Price",
          "script": "plotcandlestick(options.useHeikinAshi ? avg_heikinashi(bar) : options.useGaps ? avg_ohlc_with_gaps(bar) : avg_ohlc(bar))",
          "options": {
            "priceScaleId": "right",
            "priceFormat": {
              "auto": true,
              "precision": 2,
              "minMove": 0.01
            },
            "priceLineVisible": true,
            "lastValueVisible": true,
            "borderVisible": true,
            "upColor": "rgb(148,189,156)",
            "downColor": "rgb(181,147,144)",
            "borderUpColor": "rgb(148,189,156)",
            "borderDownColor": "rgb(181,147,144)",
            "wickUpColor": "rgb(148,189,156)",
            "wickDownColor": "rgb(181,147,144)",
            "useGaps": false,
            "useHeikinAshi": false,
            "scaleMargins": {
              "top": 0.06,
              "bottom": 0.57
            },
            "visible": true
          },
          "id": "price",
          "createdAt": 1657340969806,
          "updatedAt": 1686940997452,
          "series": [
            "price"
          ],
          "unsavedChanges": false,
          "displayName": "Price",
          "navigationState": {
            "sections": [
              "position",
              "colors"
            ],
            "tab": 0,
            "optionsQuery": "",
            "fontSize": 1
          },
          "preview": {}
        },
        "binance-spot-bnb-usdt": {
          "script": "_vbuy = (BINANCE:bnbusdt.vbuy)\r\n\r\n_vsell = (BINANCE:bnbusdt.vsell)\r\n\r\nvolume = _vbuy+ _vsell\r\na = sma(Math.pow(volume, 2), options.length)\r\nb = Math.pow(sum(volume, options.length), 2) / Math.pow(options.length, 2)\r\nstdev = Math.sqrt(a - b)\r\nbasis = sma(volume, options.length)\r\ndev = 1 * stdev\r\ntreshold = basis + dev\r\n\r\ndelta = _vbuy - _vsell\r\npos_delta = delta > 0\r\nweighted_vol = volume > treshold\r\nohlc = avg_ohlc(bar)\r\nclose_above = ohlc.close > ohlc.open\r\n\r\ncol = pos_delta ? (weighted_vol ? (close_above ? options.upColorHighVol : options.divColorSigUp) : (close_above ? options.upColorLowVol : options.divColorSmallUp)) : (weighted_vol ? (close_above ? options.divColorSigDown : options.downColorHighVol) : (close_above ? options.divColorSmallDown : options.downColorLowVol))\r\n\r\nplothistogram({ time: time, value: (delta), color: col, overlay: true }, title=\"Binance Spot BNB-USDT\")",
          "name": "Binance Spot BNB-USDT",
          "priceScaleId": "right",
          "id": "binance-spot-bnb-usdt",
          "options": {
            "priceScaleId": "binance-spot-bnb-usdt",
            "scaleMargins": {
              "top": 0.45,
              "bottom": 0.42
            },
            "upColorLowVol": "rgb(148,189,156)",
            "upColorHighVol": "rgb(111,184,104)",
            "downColorLowVol": "rgb(181,147,144)",
            "downColorHighVol": "rgb(184,110,104)",
            "divColorSmallUp": "rgb(148,189,156)",
            "divColorSmallDown": "rgb(181,147,144)",
            "divColorSigUp": "rgb(111,184,104)",
            "divColorSigDown": "rgb(184,110,104)",
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": true
            }
          },
          "series": [
            "binance-spot-bnb-usdt"
          ],
          "displayName": "Binance Spot BNB-USDT",
          "unsavedChanges": true
        },
        "binance-spot-bnb-busd": {
          "script": "_vbuy = (BINANCE:bnbbusd.vbuy)\r\n\r\n_vsell = (BINANCE:bnbbusd.vsell)\r\n\r\nvolume = _vbuy+ _vsell\r\na = sma(Math.pow(volume, 2), options.length)\r\nb = Math.pow(sum(volume, options.length), 2) / Math.pow(options.length, 2)\r\nstdev = Math.sqrt(a - b)\r\nbasis = sma(volume, options.length)\r\ndev = 1 * stdev\r\ntreshold = basis + dev\r\n\r\ndelta = _vbuy - _vsell\r\npos_delta = delta > 0\r\nweighted_vol = volume > treshold\r\nohlc = avg_ohlc(bar)\r\nclose_above = ohlc.close > ohlc.open\r\n\r\ncol = pos_delta ? (weighted_vol ? (close_above ? options.upColorHighVol : options.divColorSigUp) : (close_above ? options.upColorLowVol : options.divColorSmallUp)) : (weighted_vol ? (close_above ? options.divColorSigDown : options.downColorHighVol) : (close_above ? options.divColorSmallDown : options.downColorLowVol))\r\n\r\nplothistogram({ time: time, value: (delta), color: col, overlay: true }, title=\"Binance Spot BNB-BUSD\")",
          "name": "Binance Spot BNB-BUSD",
          "priceScaleId": "right",
          "id": "binance-spot-bnb-busd",
          "options": {
            "priceScaleId": "binance-spot-bnb-usdt-copy-1",
            "scaleMargins": {
              "top": 0.59,
              "bottom": 0.29
            },
            "upColorLowVol": "rgb(148,189,156)",
            "upColorHighVol": "rgb(111,184,104)",
            "downColorLowVol": "rgb(181,147,144)",
            "downColorHighVol": "rgb(184,110,104)",
            "divColorSmallUp": "rgb(148,189,156)",
            "divColorSmallDown": "rgb(181,147,144)",
            "divColorSigUp": "rgb(111,184,104)",
            "divColorSigDown": "rgb(184,110,104)",
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": true
            },
            "visible": true
          },
          "series": [
            "binance-spot-bnb-busd"
          ],
          "displayName": "Binance Spot BNB-BUSD",
          "unsavedChanges": true
        },
        "bitmex-perp-bnb-usd": {
          "script": "_vbuy = (BITMEX:BNBUSD.vbuy)\r\n\r\n_vsell = (BITMEX:BNBUSD.vsell)\r\n\r\nvolume = _vbuy+ _vsell\r\na = sma(Math.pow(volume, 2), options.length)\r\nb = Math.pow(sum(volume, options.length), 2) / Math.pow(options.length, 2)\r\nstdev = Math.sqrt(a - b)\r\nbasis = sma(volume, options.length)\r\ndev = 1 * stdev\r\ntreshold = basis + dev\r\n\r\ndelta = _vbuy - _vsell\r\npos_delta = delta > 0\r\nweighted_vol = volume > treshold\r\nohlc = avg_ohlc(bar)\r\nclose_above = ohlc.close > ohlc.open\r\n\r\ncol = pos_delta ? (weighted_vol ? (close_above ? options.upColorHighVol : options.divColorSigUp) : (close_above ? options.upColorLowVol : options.divColorSmallUp)) : (weighted_vol ? (close_above ? options.divColorSigDown : options.downColorHighVol) : (close_above ? options.divColorSmallDown : options.downColorLowVol))\r\n\r\nplothistogram({ time: time, value: (delta), color: col, overlay: true }, title=\"BITMEX PERP BNB-USD\")",
          "name": "BITMEX PERP BNB-USD",
          "priceScaleId": "right",
          "id": "bitmex-perp-bnb-usd",
          "options": {
            "priceScaleId": "binance-spot-bnb-busd-copy-1",
            "scaleMargins": {
              "top": 0.75,
              "bottom": 0.13
            },
            "upColorLowVol": "rgb(148,189,156)",
            "upColorHighVol": "rgb(111,184,104)",
            "downColorLowVol": "rgb(181,147,144)",
            "downColorHighVol": "rgb(184,110,104)",
            "divColorSmallUp": "rgb(148,189,156)",
            "divColorSmallDown": "rgb(181,147,144)",
            "divColorSigUp": "rgb(111,184,104)",
            "divColorSigDown": "rgb(184,110,104)",
            "visible": true,
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": true
            }
          },
          "series": [
            "bitmex-perp-bnb-usd"
          ],
          "displayName": "BITMEX PERP BNB-USD",
          "unsavedChanges": true
        },
        "binance-spot-bnb-usdt-cvd": {
          "script": "line(cum((BINANCE:bnbusdt.vbuy)-(BINANCE:bnbusdt.vsell)), title=CVD)",
          "name": "Binance Spot BNB-USDT CVD",
          "priceScaleId": "right",
          "id": "binance-spot-bnb-usdt-cvd",
          "options": {
            "priceScaleId": "binance-spot-bnb-usdt copy 1",
            "scaleMargins": {
              "top": 0.45,
              "bottom": 0.42
            },
            "visible": true,
            "priceLineVisible": false,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": true
            },
            "lastValueVisible": true
          },
          "series": [
            "binance-spot-bnb-usdt-cvd"
          ],
          "displayName": "Binance Spot BNB-USDT CVD",
          "unsavedChanges": true
        },
        "binance-spot-bnb-busd-cvd": {
          "script": "line(cum((BINANCE:bnbbusd.vbuy)-(BINANCE:bnbbusd.vsell)), title=CVD)",
          "name": "Binance Spot BNB-BUSD CVD",
          "priceScaleId": "right",
          "id": "binance-spot-bnb-busd-cvd",
          "options": {
            "priceScaleId": "binance-spot-bnb-busd-cvd",
            "scaleMargins": {
              "top": 0.59,
              "bottom": 0.29
            },
            "visible": true,
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": true
            }
          },
          "series": [
            "binance-spot-bnb-busd-cvd"
          ],
          "displayName": "Binance Spot BNB-BUSD CVD",
          "unsavedChanges": true
        },
        "bitmex-perp-bnb-usd-cvd": {
          "script": "line(cum((BITMEX:BNBUSD.vbuy)- (BITMEX:BNBUSD.vsell)), title=CVD)",
          "name": "BITMEX PERP BNB-USD CVD",
          "priceScaleId": "right",
          "id": "bitmex-perp-bnb-usd-cvd",
          "options": {
            "priceScaleId": "binance-spot-bnb-busd-cvd-copy-1",
            "scaleMargins": {
              "top": 0.75,
              "bottom": 0.13
            },
            "visible": true,
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": true
            }
          },
          "series": [
            "bitmex-perp-bnb-usd-cvd"
          ],
          "displayName": "BITMEX PERP BNB-USD CVD",
          "unsavedChanges": true
        },
        "total-spot-cvd": {
          "script": "line(cum((BINANCE:bnbbusd.vbuy+BINANCE:bnbusdt.vbuy)-(BINANCE:bnbbusd.vsell+BINANCE:bnbusdt.vsell)), title=Spot CVD)",
          "name": "Total Spot CVD",
          "priceScaleId": "right",
          "id": "total-spot-cvd",
          "options": {
            "priceScaleId": "total-spot-cvd",
            "scaleMargins": {
              "top": 0.06,
              "bottom": 0.57
            },
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": true
            }
          },
          "series": [
            "total-spot-cvd"
          ],
          "displayName": "Total Spot CVD",
          "unsavedChanges": true
        }
      },
      "priceScales": {
        "right": {
          "scaleMargins": {
            "top": 0.06,
            "bottom": 0.57
          },
          "indicators": [
            "Price"
          ]
        },
        "cvd": {
          "scaleMargins": {
            "top": 0.84,
            "bottom": 0
          }
        },
        "liquidations": {
          "scaleMargins": {
            "top": 0.82,
            "bottom": 0.1
          }
        },
        "volume": {
          "scaleMargins": {
            "top": 0.84,
            "bottom": 0
          }
        },
        "binance-spot-bnb-usdt": {
          "scaleMargins": {
            "top": 0.45,
            "bottom": 0.42
          },
          "indicators": [
            "Binance Spot BNB-USDT"
          ]
        },
        "binance-spot-bnb-usdt-copy-1": {
          "scaleMargins": {
            "top": 0.59,
            "bottom": 0.29
          },
          "indicators": [
            "Binance Spot BNB-BUSD"
          ]
        },
        "binance-spot-bnb-busd-copy-1": {
          "scaleMargins": {
            "top": 0.75,
            "bottom": 0.13
          },
          "indicators": [
            "BITMEX PERP BNB-USD"
          ]
        },
        "binance-spot-bnb-usdt copy 1": {
          "scaleMargins": {
            "top": 0.45,
            "bottom": 0.42
          },
          "indicators": [
            "Binance Spot BNB-USDT CVD copy 1"
          ]
        },
        "binance-spot-bnb-usdt-cvd-copy-1": {
          "scaleMargins": {
            "top": 0.59,
            "bottom": 0.29
          },
          "indicators": [
            "Binance Spot BNB-USDT CVD copy 1"
          ]
        },
        "binance-spot-bnb-busd-cvd": {
          "scaleMargins": {
            "top": 0.59,
            "bottom": 0.29
          },
          "indicators": [
            "Binance Spot BNB-BUSD CVD"
          ]
        },
        "binance-spot-bnb-busd-cvd-copy-1": {
          "scaleMargins": {
            "top": 0.75,
            "bottom": 0.13
          },
          "indicators": [
            "Binance Spot BNB-BUSD CVD copy 1"
          ]
        },
        "total-spot-cvd": {
          "scaleMargins": {
            "top": 0.06,
            "bottom": 0.57
          },
          "indicators": [
            "Total Spot CVD"
          ]
        }
      },
      "layouting": false,
      "showIndicators": false,
      "timeframe": "900",
      "refreshRate": 1000,
      "showAlerts": true,
      "showAlertsLabel": true,
      "showLegend": true,
      "fillGapsWithEmpty": true,
      "showHorizontalGridlines": false,
      "horizontalGridlinesColor": "rgba(255,255,255,.1)",
      "showVerticalGridlines": false,
      "verticalGridlinesColor": "rgba(255,255,255,.1)",
      "showWatermark": true,
      "watermarkColor": "rgba(255,255,255,.1)",
      "showBorder": true,
      "borderColor": null,
      "showLeftScale": false,
      "showRightScale": true,
      "showTimeScale": true,
      "hiddenMarkets": {},
      "barSpacing": 3.329272538798048,
      "navigationState": {
        "tab": "script",
        "optionsQuery": "",
        "fontSizePx": 14
      },
      "_id": "chart copy 2"
    },
    "exchanges": {
      "AGGR": {
        "disabled": false
      },
      "BINANCE": {
        "disabled": false
      },
      "BINANCE_FUTURES": {
        "disabled": false
      },
      "BINANCE_US": {
        "disabled": false
      },
      "BITFINEX": {
        "disabled": false
      },
      "BITGET": {
        "disabled": false
      },
      "BITMEX": {
        "disabled": false
      },
      "BITSTAMP": {
        "disabled": false
      },
      "BYBIT": {
        "disabled": false
      },
      "COINBASE": {
        "disabled": false
      },
      "DERIBIT": {
        "disabled": false
      },
      "DYDX": {
        "disabled": false
      },
      "GATEIO": {
        "disabled": false
      },
      "HITBTC": {
        "disabled": false
      },
      "HUOBI": {
        "disabled": false
      },
      "KRAKEN": {
        "disabled": false
      },
      "KUCOIN": {
        "disabled": false
      },
      "MEXC": {
        "disabled": false
      },
      "OKEX": {
        "disabled": false
      },
      "PHEMEX": {
        "disabled": false
      },
      "POLONIEX": {
        "disabled": false
      },
      "UNISWAP": {
        "disabled": false
      },
      "_id": "exchanges"
    },
    "futures-tape copy 1": {
      "liquidations": [
        {
          "id": "liquidation_threshold",
          "amount": 50000,
          "buyColor": "rgba(236,64,122,0.5)",
          "sellColor": "rgba(255,152,0,0.5)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
        },
        {
          "id": "liquidation_significant",
          "amount": 100000,
          "buyColor": "rgba(236,64,122,0.6)",
          "sellColor": "rgba(255,152,0,0.7)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
        },
        {
          "id": "liquidation_huge",
          "amount": 200000,
          "buyGif": "flying money",
          "sellGif": "flying money",
          "buyColor": "rgba(236,64,122,0.7)",
          "sellColor": "rgba(255,152,0,0.8)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
        },
        {
          "id": "liquidation_rare",
          "amount": 1000000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(156,39,176)",
          "sellColor": "rgb(255,235,59)",
          "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
        }
      ],
      "thresholds": [
        {
          "id": "svq920d3",
          "amount": 3000,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "significant",
          "amount": 10000,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
          "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
        },
        {
          "id": "t27sad10",
          "amount": 30000,
          "buyColor": "rgb(148,189,156)",
          "sellColor": "rgb(181,147,144)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "huge",
          "amount": 89000,
          "buyGif": "cash bullish",
          "sellGif": "cash bearish",
          "buyColor": "rgb(111,184,104)",
          "sellColor": "rgb(184,110,104)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
        },
        {
          "id": "rare",
          "amount": 300000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(84,199,73)",
          "sellColor": "rgb(174,50,40)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        }
      ],
      "audioThreshold": null,
      "multipliers": {},
      "maxRows": 100,
      "muted": true,
      "audioPitch": null,
      "audioVolume": null,
      "showPairs": true,
      "showTrades": true,
      "showLiquidations": false,
      "showLogos": true,
      "monochromeLogos": true,
      "showTimeAgo": true,
      "showPrices": true,
      "showHistograms": true,
      "thresholdsMultipler": 1,
      "_id": "futures-tape copy 1"
    },
    "binance-futures-bnb-usdt": {
      "liquidations": [
        {
          "id": "liquidation_threshold",
          "amount": 33000,
          "buyColor": "rgba(236,64,122,0.5)",
          "sellColor": "rgba(255,152,0,0.5)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
        },
        {
          "id": "liquidation_significant",
          "amount": 66000,
          "buyColor": "rgba(236,64,122,0.6)",
          "sellColor": "rgba(255,152,0,0.7)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
        },
        {
          "id": "liquidation_huge",
          "amount": 132000,
          "buyGif": "flying money",
          "sellGif": "flying money",
          "buyColor": "rgba(236,64,122,0.7)",
          "sellColor": "rgba(255,152,0,0.8)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
        },
        {
          "id": "liquidation_rare",
          "amount": 660000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(156,39,176)",
          "sellColor": "rgb(255,235,59)",
          "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
        }
      ],
      "thresholds": [
        {
          "id": "significant",
          "amount": 2000,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
          "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
        },
        {
          "id": "svw6vwar",
          "amount": 10000,
          "buyColor": "rgb(148,189,156)",
          "sellColor": "rgb(181,147,144)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "huge",
          "amount": 38000,
          "buyGif": "cash bullish",
          "sellGif": "cash bearish",
          "buyColor": "rgb(111,184,104)",
          "sellColor": "rgb(184,110,104)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
        },
        {
          "id": "rare",
          "amount": 150000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(84,199,73)",
          "sellColor": "rgb(174,50,40)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        }
      ],
      "audioThreshold": null,
      "multipliers": {},
      "maxRows": 100,
      "muted": true,
      "audioPitch": null,
      "audioVolume": null,
      "showPairs": true,
      "showTrades": true,
      "showLiquidations": false,
      "showLogos": true,
      "monochromeLogos": true,
      "showTimeAgo": true,
      "showPrices": true,
      "showHistograms": true,
      "thresholdsMultipler": 0.66,
      "_id": "binance-futures-bnb-usdt"
    },
    "binance-futures-bnb-usd-perp": {
      "liquidations": [
        {
          "id": "liquidation_threshold",
          "amount": 23000,
          "buyColor": "rgba(236,64,122,0.5)",
          "sellColor": "rgba(255,152,0,0.5)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
        },
        {
          "id": "liquidation_significant",
          "amount": 46000,
          "buyColor": "rgba(236,64,122,0.6)",
          "sellColor": "rgba(255,152,0,0.7)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
        },
        {
          "id": "liquidation_huge",
          "amount": 92000,
          "buyGif": "flying money",
          "sellGif": "flying money",
          "buyColor": "rgba(236,64,122,0.7)",
          "sellColor": "rgba(255,152,0,0.8)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
        },
        {
          "id": "liquidation_rare",
          "amount": 460000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(156,39,176)",
          "sellColor": "rgb(255,235,59)",
          "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
        }
      ],
      "thresholds": [
        {
          "id": "significant",
          "amount": 1000,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
          "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
        },
        {
          "id": "v5qb6jl5",
          "amount": 3000,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "4texbnmj",
          "amount": 10000,
          "buyColor": "rgb(148,189,156)",
          "sellColor": "rgb(181,147,144)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "huge",
          "amount": 30000,
          "buyGif": "cash bullish",
          "sellGif": "cash bearish",
          "buyColor": "rgb(111,184,104)",
          "sellColor": "rgb(184,110,104)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
        },
        {
          "id": "rare",
          "amount": 200000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(84,199,73)",
          "sellColor": "rgb(174,50,40)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        }
      ],
      "audioThreshold": null,
      "multipliers": {},
      "maxRows": 100,
      "muted": true,
      "audioPitch": null,
      "audioVolume": null,
      "showPairs": true,
      "showTrades": true,
      "showLiquidations": false,
      "showLogos": true,
      "monochromeLogos": true,
      "showTimeAgo": true,
      "showPrices": true,
      "showHistograms": true,
      "thresholdsMultipler": 0.46,
      "_id": "binance-futures-bnb-usd-perp"
    },
    "binance-futures-bnb-busd": {
      "liquidations": [
        {
          "id": "liquidation_threshold",
          "amount": 500,
          "buyColor": "rgba(236,64,122,0.5)",
          "sellColor": "rgba(255,152,0,0.5)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
        },
        {
          "id": "liquidation_significant",
          "amount": 1000,
          "buyColor": "rgba(236,64,122,0.6)",
          "sellColor": "rgba(255,152,0,0.7)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
        },
        {
          "id": "liquidation_huge",
          "amount": 2000,
          "buyGif": "flying money",
          "sellGif": "flying money",
          "buyColor": "rgba(236,64,122,0.7)",
          "sellColor": "rgba(255,152,0,0.8)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
        },
        {
          "id": "liquidation_rare",
          "amount": 10000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(156,39,176)",
          "sellColor": "rgb(255,235,59)",
          "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
        }
      ],
      "thresholds": [
        {
          "id": "significant",
          "amount": 100,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
          "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
        },
        {
          "id": "huge",
          "amount": 1000,
          "buyGif": null,
          "sellGif": null,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
        },
        {
          "id": "df4gdbgm",
          "amount": 5000,
          "buyColor": "rgb(148,189,156)",
          "sellColor": "rgb(181,147,144)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "rare",
          "amount": 10000,
          "buyGif": null,
          "sellGif": null,
          "buyColor": "rgb(118,189,133)",
          "sellColor": "rgb(194,138,133)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "6qgwlr8q",
          "amount": 30000,
          "buyColor": "rgb(111,184,104)",
          "sellColor": "rgb(184,110,104)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": "cash bullish",
          "sellGif": "cash bearish"
        },
        {
          "id": "8g6p7x28",
          "amount": 80000,
          "buyColor": "rgb(0, 255, 0)",
          "sellColor": "rgb(255, 0, 0)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": "explosion",
          "sellGif": "explosion"
        }
      ],
      "audioThreshold": null,
      "multipliers": {},
      "maxRows": 100,
      "muted": true,
      "audioPitch": null,
      "audioVolume": null,
      "showPairs": true,
      "showTrades": true,
      "showLiquidations": false,
      "showLogos": true,
      "monochromeLogos": true,
      "showTimeAgo": true,
      "showPrices": true,
      "showHistograms": true,
      "thresholdsMultipler": 0.01,
      "_id": "binance-futures-bnb-busd"
    },
    "prices copy 1": {
      "animateSort": true,
      "showPairs": true,
      "showVolume": true,
      "showVolumeDelta": false,
      "period": 0,
      "showChange": false,
      "showPrice": false,
      "sortType": "volume",
      "sortOrder": -1,
      "_id": "prices copy 1"
    },
    "prices copy 2": {
      "animateSort": true,
      "showPairs": true,
      "showVolume": true,
      "showVolumeDelta": false,
      "period": 0,
      "showChange": false,
      "showPrice": false,
      "sortType": "volume",
      "sortOrder": -1,
      "_id": "prices copy 2"
    },
    "prices copy 3": {
      "animateSort": true,
      "showPairs": true,
      "showVolume": true,
      "showVolumeDelta": false,
      "period": 0,
      "showChange": false,
      "showPrice": false,
      "sortType": "volume",
      "sortOrder": -1,
      "_id": "prices copy 3"
    },
    "binance-futures-bnb-usd-perp copy 1": {
      "liquidations": [
        {
          "id": "liquidation_threshold",
          "amount": 21000,
          "buyColor": "rgba(236,64,122,0.5)",
          "sellColor": "rgba(255,152,0,0.5)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
        },
        {
          "id": "liquidation_significant",
          "amount": 42000,
          "buyColor": "rgba(236,64,122,0.6)",
          "sellColor": "rgba(255,152,0,0.7)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
        },
        {
          "id": "liquidation_huge",
          "amount": 84000,
          "buyGif": "flying money",
          "sellGif": "flying money",
          "buyColor": "rgba(236,64,122,0.7)",
          "sellColor": "rgba(255,152,0,0.8)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
        },
        {
          "id": "liquidation_rare",
          "amount": 420000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(156,39,176)",
          "sellColor": "rgb(255,235,59)",
          "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
        }
      ],
      "thresholds": [
        {
          "id": "rare",
          "amount": 400,
          "buyGif": null,
          "sellGif": null,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "significant",
          "amount": 10000,
          "buyColor": "rgb(148,189,156)",
          "sellColor": "rgb(181,147,144)",
          "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
          "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
        },
        {
          "id": "qd8r85mt",
          "amount": 30000,
          "buyColor": "rgb(111,184,104)",
          "sellColor": "rgb(184,110,104)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "huge",
          "amount": 60000,
          "buyGif": null,
          "sellGif": null,
          "buyColor": "rgb(111,184,104)",
          "sellColor": "rgb(184,110,104)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
        },
        {
          "id": "r4zafhmt",
          "amount": 110000,
          "buyColor": "rgb(52,184,52)",
          "sellColor": "rgb(222,66,66)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": "cash bullish",
          "sellGif": "cash bearish"
        },
        {
          "id": "mon2ox61",
          "amount": 290000,
          "buyColor": "rgb(0, 255, 0)",
          "sellColor": "rgb(255, 0, 0)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": "explosion",
          "sellGif": "explosion"
        }
      ],
      "audioThreshold": null,
      "multipliers": {},
      "maxRows": 100,
      "muted": true,
      "audioPitch": null,
      "audioVolume": null,
      "showPairs": true,
      "showTrades": true,
      "showLiquidations": false,
      "showLogos": true,
      "monochromeLogos": true,
      "showTimeAgo": true,
      "showPrices": true,
      "showHistograms": true,
      "thresholdsMultipler": 0.42,
      "_id": "binance-futures-bnb-usd-perp copy 1"
    },
    "prices copy 4": {
      "animateSort": true,
      "showPairs": true,
      "showVolume": true,
      "showVolumeDelta": false,
      "period": 0,
      "showChange": false,
      "showPrice": false,
      "sortType": "volume",
      "sortOrder": -1,
      "_id": "prices copy 4"
    },
    "prices copy 5": {
      "animateSort": true,
      "showPairs": true,
      "showVolume": true,
      "showVolumeDelta": false,
      "period": 0,
      "showChange": false,
      "showPrice": false,
      "sortType": "volume",
      "sortOrder": -1,
      "_id": "prices copy 5"
    },
    "chart copy 3": {
      "indicatorsErrors": {},
      "indicators": {
        "exchange-arb": {
          "script": "plotline(BINANCE_FUTURES:bnbbusd.close, color=rgb(255,235,59), title=BINANCE PERP BNB-BUSD)\nplotline(BINANCE_FUTURES:bnbusd_perp.close, color=rgb(255,255,255), title=BINANCE PERP BNB-USD)\nplotline(BINANCE_FUTURES:bnbusdt.close, color=rgb(109,199,145), title=BINANCE PERP BNB-USDT)\nplotline(BINANCE:bnbbusd.close, color=rgb(255,235,59), title=BINANCE SPOT BNB-BUSD)\nplotline(BINANCE:bnbusdt.close, color=rgb(70,118,72), title=BINANCE SPOT BNB-USDT)\nplotline(BITMEX:BNBUSD.close, color=rgb(117,142,176), title=BITMEX PERP BNB-USD)\nplotline(BYBIT:BNBUSDT.close, color=rgb(240,217,181), title=BYBIT PERP BNB-USDT)\nplotline(BINANCE:BNBBTC.close, color=#97c554, title=BNB-BTC)",
          "name": "Exchange Arb",
          "priceScaleId": "right",
          "id": "exchange-arb",
          "options": {
            "priceScaleId": "right",
            "color": "rgb(255,255,255)"
          },
          "series": [
            "exchange-arb",
            "rr0zulxu",
            "napzj2x2",
            "685a4zal",
            "o2c1bvda",
            "cuueqdd5",
            "fls17f3o",
            "12ykadaz"
          ],
          "displayName": "Exchange Arb",
          "unsavedChanges": true
        }
      },
      "priceScales": {
        "right": {
          "scaleMargins": {
            "top": 0.04,
            "bottom": 0.26
          }
        },
        "cvd": {
          "scaleMargins": {
            "top": 0.84,
            "bottom": 0
          }
        },
        "liquidations": {
          "scaleMargins": {
            "top": 0.82,
            "bottom": 0.1
          }
        },
        "volume": {
          "scaleMargins": {
            "top": 0.84,
            "bottom": 0
          }
        }
      },
      "layouting": false,
      "showIndicators": true,
      "timeframe": "60",
      "refreshRate": 1000,
      "showAlerts": true,
      "showAlertsLabel": true,
      "showLegend": true,
      "fillGapsWithEmpty": true,
      "showHorizontalGridlines": false,
      "horizontalGridlinesColor": "rgba(255,255,255,.1)",
      "showVerticalGridlines": false,
      "verticalGridlinesColor": "rgba(255,255,255,.1)",
      "showWatermark": true,
      "watermarkColor": "rgba(255,255,255,.1)",
      "showBorder": true,
      "borderColor": null,
      "showLeftScale": false,
      "showRightScale": true,
      "showTimeScale": true,
      "hiddenMarkets": {},
      "barSpacing": 2.439607784649257,
      "navigationState": {
        "tab": "script",
        "optionsQuery": "",
        "fontSizePx": 14
      },
      "_id": "chart copy 3"
    },
    "bybit-perp-bnb-usdt": {
      "liquidations": [
        {
          "id": "liquidation_threshold",
          "amount": 14000,
          "buyColor": "rgba(236,64,122,0.5)",
          "sellColor": "rgba(255,152,0,0.5)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
        },
        {
          "id": "liquidation_significant",
          "amount": 28000,
          "buyColor": "rgba(236,64,122,0.6)",
          "sellColor": "rgba(255,152,0,0.7)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
        },
        {
          "id": "liquidation_huge",
          "amount": 56000,
          "buyGif": "flying money",
          "sellGif": "flying money",
          "buyColor": "rgba(236,64,122,0.7)",
          "sellColor": "rgba(255,152,0,0.8)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
        },
        {
          "id": "liquidation_rare",
          "amount": 280000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(156,39,176)",
          "sellColor": "rgb(255,235,59)",
          "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
        }
      ],
      "thresholds": [
        {
          "id": "significant",
          "amount": 1000,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
          "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
        },
        {
          "id": "huge",
          "amount": 10000,
          "buyGif": null,
          "sellGif": null,
          "buyColor": "rgb(148,189,156)",
          "sellColor": "rgb(181,147,144)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
        },
        {
          "id": "rare",
          "amount": 30000,
          "buyGif": "cash bullish",
          "sellGif": "cash bearish",
          "buyColor": "rgb(111,184,104)",
          "sellColor": "rgb(184,110,104)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "7i90d9n0",
          "amount": 100000,
          "buyColor": "rgb(0, 255, 0)",
          "sellColor": "rgb(255, 0, 0)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": "explosion",
          "sellGif": "explosion"
        }
      ],
      "audioThreshold": null,
      "multipliers": {},
      "maxRows": 100,
      "muted": true,
      "audioPitch": null,
      "audioVolume": null,
      "showPairs": true,
      "showTrades": true,
      "showLiquidations": false,
      "showLogos": true,
      "monochromeLogos": true,
      "showTimeAgo": true,
      "showPrices": true,
      "showHistograms": true,
      "thresholdsMultipler": 0.28,
      "_id": "bybit-perp-bnb-usdt"
    },
    "bybit-perp-bnb-usdt copy 1": {
      "liquidations": [
        {
          "id": "liquidation_threshold",
          "amount": 14000,
          "buyColor": "rgba(236,64,122,0.5)",
          "sellColor": "rgba(255,152,0,0.5)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
        },
        {
          "id": "liquidation_significant",
          "amount": 28000,
          "buyColor": "rgba(236,64,122,0.6)",
          "sellColor": "rgba(255,152,0,0.7)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
        },
        {
          "id": "liquidation_huge",
          "amount": 56000,
          "buyGif": "flying money",
          "sellGif": "flying money",
          "buyColor": "rgba(236,64,122,0.7)",
          "sellColor": "rgba(255,152,0,0.8)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
        },
        {
          "id": "liquidation_rare",
          "amount": 280000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(156,39,176)",
          "sellColor": "rgb(255,235,59)",
          "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
        }
      ],
      "thresholds": [
        {
          "id": "significant",
          "amount": 1000,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
          "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
        },
        {
          "id": "huge",
          "amount": 28000,
          "buyGif": null,
          "sellGif": null,
          "buyColor": "rgb(148,189,156)",
          "sellColor": "rgb(181,147,144)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
        },
        {
          "id": "rare",
          "amount": 40000,
          "buyGif": "cash bullish",
          "sellGif": "cash bearish",
          "buyColor": "rgb(111,184,104)",
          "sellColor": "rgb(184,110,104)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "0j0r9jm7",
          "amount": 300000,
          "buyColor": "rgb(0, 255, 0)",
          "sellColor": "rgb(255, 0, 0)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": "explosion",
          "sellGif": "explosion"
        }
      ],
      "audioThreshold": null,
      "multipliers": {},
      "maxRows": 100,
      "muted": true,
      "audioPitch": null,
      "audioVolume": null,
      "showPairs": true,
      "showTrades": true,
      "showLiquidations": false,
      "showLogos": true,
      "monochromeLogos": true,
      "showTimeAgo": true,
      "showPrices": true,
      "showHistograms": true,
      "thresholdsMultipler": 0.28,
      "_id": "bybit-perp-bnb-usdt copy 1"
    },
    "prices copy 6": {
      "animateSort": true,
      "showPairs": true,
      "showVolume": true,
      "showVolumeDelta": false,
      "period": 0,
      "showChange": false,
      "showPrice": false,
      "sortType": "volume",
      "sortOrder": -1,
      "_id": "prices copy 6"
    },
    "prices copy 7": {
      "animateSort": true,
      "showPairs": true,
      "showVolume": true,
      "showVolumeDelta": false,
      "period": 0,
      "showChange": false,
      "showPrice": false,
      "sortType": "volume",
      "sortOrder": -1,
      "_id": "prices copy 7"
    },
    "chart copy 4": {
      "indicatorsErrors": {},
      "indicators": {
        "binance-perp-bnb-usdt-premium": {
          "script": "perpAvg = (BINANCE_FUTURES:bnbusdt.close)\n\nspotAvg = (BINANCE:bnbusdt.close)\n\npremium = (perpAvg/spotAvg - 1)*100\nbaseline = 0\n\nplotcloudarea(premium, baseline, title=BINANCE Perp BNB-USDT PREMIUM)",
          "name": "BINANCE PERP BNB-USDT PREMIUM",
          "priceScaleId": "right",
          "id": "binance-perp-bnb-usdt-premium",
          "options": {
            "priceScaleId": "binance-perp-bnb-usdt-premium",
            "scaleMargins": {
              "top": 0.06,
              "bottom": 0.54
            },
            "lastValueVisible": true,
            "priceLineVisible": false,
            "positiveLineColor": "rgb(255,255,255)",
            "positiveColor": "rgba(242,54,69,0.49)",
            "negativeLineColor": "rgba(242,54,69,0.16)",
            "negativeColor": "rgba(242,54,69,0.12)",
            "higherLineStyle": 0,
            "visible": true,
            "lowerLineWidth": 1
          },
          "series": [
            "binance-perp-bnb-usdt-premium"
          ],
          "displayName": "BINANCE PERP BNB-USDT PREMIUM",
          "unsavedChanges": true
        },
        "binance-perp-bnb-busd-premium": {
          "script": "perpAvg = (BINANCE_FUTURES:bnbbusd.close)\n\nspotAvg = (BINANCE:bnbbusd.close)\n\npremium = (perpAvg/spotAvg - 1)*100\nbaseline = 0\n\n\n\nplotcloudarea(premium, baseline, title=BINANCE Perp BNB-BUSD PREMIUM)",
          "name": "BINANCE PERP BNB-BUSD PREMIUM",
          "priceScaleId": "right",
          "id": "binance-perp-bnb-busd-premium",
          "options": {
            "priceScaleId": "binance-perp-bnb-busd-premium",
            "scaleMargins": {
              "top": 0.48,
              "bottom": 0.09
            },
            "positiveColor": "rgba(235,55,70,0.5)",
            "negativeLineColor": "rgba(41,98,255,0.06)",
            "priceLineVisible": false,
            "lastValueVisible": true,
            "priceFormat": {
              "type": "price",
              "precision": 2,
              "minMove": 0.01,
              "auto": true
            },
            "negativeColor": "rgba(225,50,64,0.14)",
            "higherLineStyle": 0,
            "positiveLineColor": "rgb(255,255,255)",
            "bullColor": "rgb(242,54,69)",
            "bearColor": "rgb(8,153,129)",
            "baselineColor": "rgb(255,255,255)"
          },
          "series": [
            "binance-perp-bnb-busd-premium"
          ],
          "displayName": "BINANCE PERP BNB-BUSD PREMIUM",
          "unsavedChanges": true
        }
      },
      "priceScales": {
        "right": {
          "scaleMargins": {
            "top": 0.04,
            "bottom": 0.26
          }
        },
        "cvd": {
          "scaleMargins": {
            "top": 0.84,
            "bottom": 0
          }
        },
        "liquidations": {
          "scaleMargins": {
            "top": 0.82,
            "bottom": 0.1
          }
        },
        "volume": {
          "scaleMargins": {
            "top": 0.84,
            "bottom": 0
          }
        },
        "untitled": {
          "scaleMargins": {
            "top": 0.1,
            "bottom": 0.2
          }
        },
        "binance-perp-bnb-usdt-premium": {
          "scaleMargins": {
            "top": 0.06,
            "bottom": 0.54
          },
          "indicators": [
            "BINANCE PERP BNB-USDT PREMIUM"
          ]
        },
        "binance-perp-bnb-busd-premium": {
          "scaleMargins": {
            "top": 0.48,
            "bottom": 0.09
          },
          "indicators": [
            "BINANCE PERP BNB-BUSD PREMIUM"
          ]
        }
      },
      "layouting": false,
      "showIndicators": true,
      "timeframe": "60",
      "refreshRate": 1000,
      "showAlerts": true,
      "showAlertsLabel": true,
      "showLegend": true,
      "fillGapsWithEmpty": true,
      "showHorizontalGridlines": false,
      "horizontalGridlinesColor": "rgba(255,255,255,.1)",
      "showVerticalGridlines": true,
      "verticalGridlinesColor": "rgba(255,255,255,.1)",
      "showWatermark": true,
      "watermarkColor": "rgba(255,255,255,.1)",
      "showBorder": true,
      "borderColor": null,
      "showLeftScale": false,
      "showRightScale": true,
      "showTimeScale": true,
      "hiddenMarkets": {},
      "barSpacing": 3.3218774049326543,
      "navigationState": {
        "tab": "script",
        "optionsQuery": "",
        "fontSizePx": 16
      },
      "_id": "chart copy 4"
    },
    "binance-spot-bnb-busd": {
      "liquidations": [
        {
          "id": "liquidation_threshold",
          "amount": 14000,
          "buyColor": "rgba(236,64,122,0.5)",
          "sellColor": "rgba(255,152,0,0.5)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
        },
        {
          "id": "liquidation_significant",
          "amount": 28000,
          "buyColor": "rgba(236,64,122,0.6)",
          "sellColor": "rgba(255,152,0,0.7)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
        },
        {
          "id": "liquidation_huge",
          "amount": 56000,
          "buyGif": "flying money",
          "sellGif": "flying money",
          "buyColor": "rgba(236,64,122,0.7)",
          "sellColor": "rgba(255,152,0,0.8)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
        },
        {
          "id": "liquidation_rare",
          "amount": 280000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(156,39,176)",
          "sellColor": "rgb(255,235,59)",
          "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
        }
      ],
      "thresholds": [
        {
          "id": "significant",
          "amount": 1000,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
          "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
        },
        {
          "id": "huge",
          "amount": 10000,
          "buyGif": null,
          "sellGif": null,
          "buyColor": "rgb(148,189,156)",
          "sellColor": "rgb(181,147,144)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
        },
        {
          "id": "rare",
          "amount": 30000,
          "buyGif": "cash bullish",
          "sellGif": "cash bearish",
          "buyColor": "rgb(111,184,104)",
          "sellColor": "rgb(184,110,104)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "7i90d9n0",
          "amount": 100000,
          "buyColor": "rgb(0, 255, 0)",
          "sellColor": "rgb(255, 0, 0)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": "explosion",
          "sellGif": "explosion"
        }
      ],
      "audioThreshold": null,
      "multipliers": {},
      "maxRows": 100,
      "muted": true,
      "audioPitch": null,
      "audioVolume": null,
      "showPairs": true,
      "showTrades": true,
      "showLiquidations": false,
      "showLogos": true,
      "monochromeLogos": true,
      "showTimeAgo": true,
      "showPrices": true,
      "showHistograms": true,
      "thresholdsMultipler": 0.28,
      "_id": "binance-spot-bnb-busd"
    },
    "kucoin-bnb-usdt-m": {
      "liquidations": [
        {
          "id": "liquidation_threshold",
          "amount": 14000,
          "buyColor": "rgba(236,64,122,0.5)",
          "sellColor": "rgba(255,152,0,0.5)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
        },
        {
          "id": "liquidation_significant",
          "amount": 28000,
          "buyColor": "rgba(236,64,122,0.6)",
          "sellColor": "rgba(255,152,0,0.7)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
        },
        {
          "id": "liquidation_huge",
          "amount": 56000,
          "buyGif": "flying money",
          "sellGif": "flying money",
          "buyColor": "rgba(236,64,122,0.7)",
          "sellColor": "rgba(255,152,0,0.8)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
        },
        {
          "id": "liquidation_rare",
          "amount": 280000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(156,39,176)",
          "sellColor": "rgb(255,235,59)",
          "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
        }
      ],
      "thresholds": [
        {
          "id": "significant",
          "amount": 1000,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
          "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
        },
        {
          "id": "rare",
          "amount": 10000,
          "buyGif": null,
          "sellGif": null,
          "buyColor": "rgb(148,189,156)",
          "sellColor": "rgb(181,147,144)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "7i90d9n0",
          "amount": 50000,
          "buyColor": "rgb(111,184,104)",
          "sellColor": "rgb(184,110,104)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": "cash bullish",
          "sellGif": "cash bearish"
        },
        {
          "id": "7864umiz",
          "amount": 70000,
          "buyColor": "rgb(0, 255, 0)",
          "sellColor": "rgb(255, 0, 0)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": "cash bullish",
          "sellGif": "cash bearish"
        },
        {
          "id": "thddjyv2",
          "amount": 100000,
          "buyColor": "rgb(0, 255, 0)",
          "sellColor": "rgb(255, 0, 0)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": "explosion",
          "sellGif": "explosion"
        }
      ],
      "audioThreshold": null,
      "multipliers": {},
      "maxRows": 100,
      "muted": true,
      "audioPitch": null,
      "audioVolume": null,
      "showPairs": true,
      "showTrades": true,
      "showLiquidations": false,
      "showLogos": true,
      "monochromeLogos": true,
      "showTimeAgo": true,
      "showPrices": true,
      "showHistograms": true,
      "thresholdsMultipler": 0.28,
      "_id": "kucoin-bnb-usdt-m"
    },
    "mexc-perp-bnb-usdt": {
      "liquidations": [
        {
          "id": "liquidation_threshold",
          "amount": 14000,
          "buyColor": "rgba(236,64,122,0.5)",
          "sellColor": "rgba(255,152,0,0.5)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
        },
        {
          "id": "liquidation_significant",
          "amount": 28000,
          "buyColor": "rgba(236,64,122,0.6)",
          "sellColor": "rgba(255,152,0,0.7)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
        },
        {
          "id": "liquidation_huge",
          "amount": 56000,
          "buyGif": "flying money",
          "sellGif": "flying money",
          "buyColor": "rgba(236,64,122,0.7)",
          "sellColor": "rgba(255,152,0,0.8)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
        },
        {
          "id": "liquidation_rare",
          "amount": 280000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(156,39,176)",
          "sellColor": "rgb(255,235,59)",
          "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
        }
      ],
      "thresholds": [
        {
          "id": "significant",
          "amount": 1000,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
          "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
        },
        {
          "id": "huge",
          "amount": 10000,
          "buyGif": null,
          "sellGif": null,
          "buyColor": "rgb(148,189,156)",
          "sellColor": "rgb(181,147,144)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
        },
        {
          "id": "rare",
          "amount": 30000,
          "buyGif": "cash bullish",
          "sellGif": "cash bearish",
          "buyColor": "rgb(111,184,104)",
          "sellColor": "rgb(184,110,104)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "7i90d9n0",
          "amount": 100000,
          "buyColor": "rgb(0, 255, 0)",
          "sellColor": "rgb(255, 0, 0)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": "explosion",
          "sellGif": "explosion"
        }
      ],
      "audioThreshold": null,
      "multipliers": {},
      "maxRows": 100,
      "muted": true,
      "audioPitch": null,
      "audioVolume": null,
      "showPairs": true,
      "showTrades": true,
      "showLiquidations": false,
      "showLogos": true,
      "monochromeLogos": true,
      "showTimeAgo": true,
      "showPrices": true,
      "showHistograms": true,
      "thresholdsMultipler": 0.28,
      "_id": "mexc-perp-bnb-usdt"
    },
    "okex-perp-bnb-usdt-swap copy 1": {
      "liquidations": [
        {
          "id": "liquidation_threshold",
          "amount": 14000,
          "buyColor": "rgba(236,64,122,0.5)",
          "sellColor": "rgba(255,152,0,0.5)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
        },
        {
          "id": "liquidation_significant",
          "amount": 28000,
          "buyColor": "rgba(236,64,122,0.6)",
          "sellColor": "rgba(255,152,0,0.7)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
        },
        {
          "id": "liquidation_huge",
          "amount": 56000,
          "buyGif": "flying money",
          "sellGif": "flying money",
          "buyColor": "rgba(236,64,122,0.7)",
          "sellColor": "rgba(255,152,0,0.8)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
        },
        {
          "id": "liquidation_rare",
          "amount": 280000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(156,39,176)",
          "sellColor": "rgb(255,235,59)",
          "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
        }
      ],
      "thresholds": [
        {
          "id": "significant",
          "amount": 1000,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
          "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
        },
        {
          "id": "huge",
          "amount": 10000,
          "buyGif": null,
          "sellGif": null,
          "buyColor": "rgb(148,189,156)",
          "sellColor": "rgb(181,147,144)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
        },
        {
          "id": "rare",
          "amount": 60000,
          "buyGif": "cash bullish",
          "sellGif": "cash bearish",
          "buyColor": "rgb(111,184,104)",
          "sellColor": "rgb(184,110,104)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "7i90d9n0",
          "amount": 100000,
          "buyColor": "rgb(0, 255, 0)",
          "sellColor": "rgb(255, 0, 0)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": "cash bullish",
          "sellGif": "cash bearish"
        },
        {
          "id": "0gkid5ke",
          "amount": 300000,
          "buyColor": "rgb(0, 255, 0)",
          "sellColor": "rgb(255, 0, 0)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": "explosion",
          "sellGif": "explosion"
        }
      ],
      "audioThreshold": null,
      "multipliers": {},
      "maxRows": 100,
      "muted": true,
      "audioPitch": null,
      "audioVolume": null,
      "showPairs": true,
      "showTrades": true,
      "showLiquidations": false,
      "showLogos": true,
      "monochromeLogos": true,
      "showTimeAgo": true,
      "showPrices": true,
      "showHistograms": true,
      "thresholdsMultipler": 0.28,
      "_id": "okex-perp-bnb-usdt-swap copy 1"
    },
    "binance-spot-bnb-usd": {
      "animateSort": true,
      "showPairs": true,
      "showVolume": true,
      "showVolumeDelta": false,
      "period": 0,
      "showChange": false,
      "showPrice": false,
      "sortType": "volume",
      "sortOrder": -1,
      "_id": "binance-spot-bnb-usd"
    },
    "binance-spot-bnb-usd copy 1": {
      "animateSort": true,
      "showPairs": true,
      "showVolume": true,
      "showVolumeDelta": false,
      "period": 0,
      "showChange": false,
      "showPrice": false,
      "sortType": "volume",
      "sortOrder": -1,
      "_id": "binance-spot-bnb-usd copy 1"
    },
    "binance-spot-bnb-usd copy 2": {
      "animateSort": true,
      "showPairs": true,
      "showVolume": true,
      "showVolumeDelta": false,
      "period": 0,
      "showChange": false,
      "showPrice": false,
      "sortType": "volume",
      "sortOrder": -1,
      "_id": "binance-spot-bnb-usd copy 2"
    },
    "binance-spot-bnb-usd copy 3": {
      "animateSort": true,
      "showPairs": true,
      "showVolume": true,
      "showVolumeDelta": false,
      "period": 0,
      "showChange": false,
      "showPrice": false,
      "sortType": "volume",
      "sortOrder": -1,
      "_id": "binance-spot-bnb-usd copy 3"
    },
    "phemex-perp-bnb-usdt": {
      "liquidations": [
        {
          "id": "liquidation_threshold",
          "amount": 500,
          "buyColor": "rgba(236,64,122,0.5)",
          "sellColor": "rgba(255,152,0,0.5)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
        },
        {
          "id": "liquidation_significant",
          "amount": 1000,
          "buyColor": "rgba(236,64,122,0.6)",
          "sellColor": "rgba(255,152,0,0.7)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
        },
        {
          "id": "liquidation_huge",
          "amount": 2000,
          "buyGif": "flying money",
          "sellGif": "flying money",
          "buyColor": "rgba(236,64,122,0.7)",
          "sellColor": "rgba(255,152,0,0.8)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
        },
        {
          "id": "liquidation_rare",
          "amount": 10000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(156,39,176)",
          "sellColor": "rgb(255,235,59)",
          "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
        }
      ],
      "thresholds": [
        {
          "id": "yl6ff0p5",
          "amount": 5000,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "7i90d9n0",
          "amount": 15000,
          "buyColor": "rgb(148,189,156)",
          "sellColor": "rgb(181,147,144)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": null
        },
        {
          "id": "2of2w87y",
          "amount": 50000,
          "buyColor": "rgb(96,181,88)",
          "sellColor": "rgb(184,110,104)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": null,
          "sellGif": null
        },
        {
          "id": "eke3zuam",
          "amount": 100000,
          "buyColor": "rgb(0, 255, 0)",
          "sellColor": "rgb(255, 0, 0)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": "cash bullish",
          "sellGif": "cash bearish"
        },
        {
          "id": "15k3zhp3",
          "amount": 200000,
          "buyColor": "rgb(0, 255, 0)",
          "sellColor": "rgb(255, 0, 0)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": "explosion",
          "sellGif": "explosion"
        }
      ],
      "audioThreshold": null,
      "multipliers": {},
      "maxRows": 100,
      "muted": true,
      "audioPitch": null,
      "audioVolume": null,
      "showPairs": true,
      "showTrades": true,
      "showLiquidations": false,
      "showLogos": true,
      "monochromeLogos": true,
      "showTimeAgo": true,
      "showPrices": true,
      "showHistograms": true,
      "thresholdsMultipler": 0.01,
      "_id": "phemex-perp-bnb-usdt"
    },
    "phemex-perp-bnb-usd": {
      "liquidations": [
        {
          "id": "liquidation_threshold",
          "amount": 500,
          "buyColor": "rgba(236,64,122,0.5)",
          "sellColor": "rgba(255,152,0,0.5)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
        },
        {
          "id": "liquidation_significant",
          "amount": 1000,
          "buyColor": "rgba(236,64,122,0.6)",
          "sellColor": "rgba(255,152,0,0.7)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
        },
        {
          "id": "liquidation_huge",
          "amount": 2000,
          "buyGif": "flying money",
          "sellGif": "flying money",
          "buyColor": "rgba(236,64,122,0.7)",
          "sellColor": "rgba(255,152,0,0.8)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
        },
        {
          "id": "liquidation_rare",
          "amount": 10000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(156,39,176)",
          "sellColor": "rgb(255,235,59)",
          "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
        }
      ],
      "thresholds": [
        {
          "id": "significant",
          "amount": 35.71,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
          "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
        },
        {
          "id": "huge",
          "amount": 357.14,
          "buyGif": null,
          "sellGif": null,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
        },
        {
          "id": "rare",
          "amount": 1071.43,
          "buyGif": null,
          "sellGif": null,
          "buyColor": "rgb(194,209,197)",
          "sellColor": "rgb(179,166,166)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        },
        {
          "id": "7i90d9n0",
          "amount": 10000,
          "buyColor": "rgb(148,189,156)",
          "sellColor": "rgb(181,147,144)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": null
        },
        {
          "id": "2of2w87y",
          "amount": 50000,
          "buyColor": "rgb(0, 255, 0)",
          "sellColor": "rgb(255, 0, 0)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "buyGif": "cash bullish",
          "sellGif": "cash bearish"
        }
      ],
      "audioThreshold": null,
      "multipliers": {},
      "maxRows": 100,
      "muted": true,
      "audioPitch": null,
      "audioVolume": null,
      "showPairs": true,
      "showTrades": true,
      "showLiquidations": false,
      "showLogos": true,
      "monochromeLogos": true,
      "showTimeAgo": true,
      "showPrices": true,
      "showHistograms": true,
      "thresholdsMultipler": 0.01,
      "_id": "phemex-perp-bnb-usd"
    },
    "prices copy 8": {
      "animateSort": false,
      "showPairs": true,
      "showVolume": true,
      "showVolumeDelta": false,
      "period": 0,
      "showChange": false,
      "showPrice": false,
      "sortType": "change",
      "sortOrder": -1,
      "_id": "prices copy 8"
    },
    "phemex": {
      "animateSort": false,
      "showPairs": true,
      "showVolume": true,
      "showVolumeDelta": false,
      "period": 0,
      "showChange": false,
      "showPrice": false,
      "sortType": "change",
      "sortOrder": -1,
      "_id": "phemex"
    }
  }
}
