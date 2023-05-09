import got from "got";
import { ICliCommand } from "./cli-command.interface.js";
import { TMockData } from "../../types/mock-data";
import OfferGenerator from "../../modules/offer-generator/offer-generator.js";
import TSVFileWriter from "../file-writer/tsv-file-writer.js";

export default class GenerateCommand implements ICliCommand {
  public readonly name = "--generate";
  private initialData!: TMockData;

  public async execute(...parameters: string[]): Promise<void> {
    const [count, filepath, url] = parameters;
    const offerCount = Number.parseInt(count, 10);

    try {
      this.initialData = await got.get(url).json();
    } catch {
      console.log(`Can't fetch data from ${url}.`);
      return;
    }

    const offerGeneratorString = new OfferGenerator(this.initialData);
    const tsvFileWriter = new TSVFileWriter(filepath);

    for (let i = 0; i < offerCount; i++) {
      await tsvFileWriter.write(offerGeneratorString.generate());
    }

    console.log(`File ${filepath} was created!`);
  }
}
