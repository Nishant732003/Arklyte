/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { Page } from "puppeteer";

interface Flight {
  airlineLogo: string;
  departureTime: string;
  arrivalTime: string;
  flightDuration: string;
  airlineName: string;
  price: number;
}

export const startFlightScraping = async (page: Page): Promise<Flight[]> => {
  console.log("Starting flight scraping..."); // Added log
  return await page.evaluate(async (): Promise<Flight[]> => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Waiting for 5 seconds before starting..."); // Added log
    const flights: Flight[] = [];
    console.log("Number of flights found:", flightSelectors.length); // Added log
    const flightSelectors = document.querySelectorAll(".nrc6-wrapper");

    flightSelectors.forEach((flightElement) => {
      const airlineLogo = flightElement.querySelector("img")?.src || "";
      const [rawDepartureTime, rawArrivalTime] = (
        flightElement.querySelector(".vmXl")?.innerText || ""
      ).split(" - ");

      // Function to extract time and remove numeric values at the end
      const extractTime = (rawTime: string): string => {
        const timeWithoutNumbers = rawTime.replace(/[0-9+\s]+$/, "").trim();
        return timeWithoutNumbers;
      };

      const departureTime = extractTime(rawDepartureTime);
      console.log(departureTime, "depart time flight");
      const arrivalTime = extractTime(rawArrivalTime);
      console.log(arrivalTime, "time at arrived");
      const flightDuration = (
        flightElement.querySelector(".xdW8")?.children[0]?.innerText || ""
      ).trim();
      console.log(flightDuration, "flightduration airline");
      const airlineName = (
        flightElement.querySelector(".VY2U")?.children[1]?.innerText || ""
      ).trim();
      console.log(airlineName, "airlinename");
      // Extract price
      const price = parseInt(
        (flightElement.querySelector(".f8F1-price-text")?.innerText || "")
          .replace(/[^\d]/g, "")
          .trim(),
        10
      );
      console.log(price, "price  fkdjkd");
      flights.push({
        airlineLogo,
        departureTime,
        arrivalTime,
        flightDuration,
        airlineName,
        price,
      });
    });
console.log(flights,"flights nisant raj mahto")
    return flights;
  });
};
