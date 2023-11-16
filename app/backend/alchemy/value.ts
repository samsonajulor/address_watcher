import { ethers } from 'ethers';

export const valueTx = (value, tx) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Verification Email</title>
    <meta name="description" content="Verify Email." />
    <style type="text/css">
      a:hover {
        text-decoration: underline !important;
      }
    </style>
  </head>

  <body
    marginheight="0"
    topmargin="0"
    marginwidth="0"
    style="margin: 0px; background-color: #f2f3f8"
    leftmargin="0"
  >
    <!--100% body table-->
    <table
      cellspacing="0"
      border="0"
      cellpadding="0"
      width="100%"
      bgcolor="#f2f3f8"
      style="
        @import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700);
        font-family: 'Open Sans', sans-serif;
      "
    >
      <tr>
        <td>
          <table
            style="background-color: #f2f3f8; max-width: 670px; margin: 0 auto"
            width="100%"
            border="0"
            align="center"
            cellpadding="0"
            cellspacing="0"
          >
            <tr>
              <td style="height: 80px">&nbsp;</td>
            </tr>
            <tr>
              <td style="text-align: center">
                <a href="https://address-watcher.vercel.app" title="logo" target="_blank">Watcher</a>
              </td>
            </tr>
            <tr>
              <td style="height: 20px">&nbsp;</td>
            </tr>
            <tr>
              <td>
                <table
                  width="95%"
                  border="0"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    max-width: 670px;
                    background: #fff;
                    border-radius: 3px;
                    text-align: center;
                    -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                    -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                    box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                  "
                >
                  <tr>
                    <td style="height: 40px">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="padding: 0 35px">
                      <h1
                        style="
                          color: #1e1e2d;
                          font-weight: 500;
                          margin: 0;
                          font-size: 32px;
                          font-family: 'Rubik', sans-serif;
                        "
                      >
                        Watcher Alert 👀: Value Transaction
                      </h1>
                      <span
                        style="
                          display: inline-block;
                          vertical-align: middle;
                          margin: 29px 0 26px;
                          border-bottom: 1px solid #cecece;
                          width: 100px;
                        "
                      ></span>
                      <div>
                      <p style="color: #455056; font-size: 1rem; line-height: 24px; margin: 0">
                        Hello there! Watcher has detected a transaction being made on your address.
                      </p>
                      <h4 style="color: #455056">${value}</h4>
                      <p style="color: #455056; font-size: 1rem; line-height: 24px; font-weight: semibold">
                        Below are the details:
                      </p>
                      <ul style="list-style: none; color: #455056; width: 80vw; text-align: left">
                        <li style="margin-top: 5px"><span style="font-weight: 600">Transaction type:</span> Value transaction</li>
                        <li style="margin-top: 5px"><span style="font-weight: 600">From address:</span> ${
                          tx.from
                        }</li>
                        <li style="margin-top: 5px"><span style="font-weight: 600">To address:</span> ${
                          tx.to
                        }</li>
                        <li style="margin-top: 5px"><span style="font-weight: 600">Amount:</span> ${ethers.formatEther(
                          tx.value
                        )} ETH</li>
                        <li style="margin-top: 5px"><span style="font-weight: 600">Timestamp:</span> ${new Date().toLocaleTimeString()}</li>
                        <li style="margin-top: 5px; word-wrap: break-word"><span style="font-weight: 600">Hash:</span> ${
                          tx.hash
                        }</li>
                      </ul>
                      <a
                        href={https://sepolia.etherscan.io/${tx.hash}}
                        style="
                          background: #20e277;
                          text-decoration: none !important;
                          font-weight: 500;
                          margin-top: 35px;
                          color: #fff;
                          font-size: 14px;
                          padding: 10px 24px;
                          display: inline-block;
                          border-radius: 50px;
                        "
                        >Click to view on explorer</a
                      >
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td style="height: 40px">&nbsp;</td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="height: 20px">&nbsp;</td>
            </tr>
            <tr>
              <td style="text-align: center">
                <p
                  style="
                    font-size: 14px;
                    color: rgba(69, 80, 86, 0.7411764705882353);
                    line-height: 18px;
                    margin: 0 0 0;
                  "
                >
                  &copy; Copyright ${new Date().getFullYear()} <strong>Address Watcher</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td style="height: 80px">&nbsp;</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <!--/100% body table-->
  </body>
</html>
  `;
};
