/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] font-sans flex items-center justify-center p-5 leading-relaxed">
      <div className="max-w-[600px] w-full text-center">
        <h1 className="text-[1.8rem] md:text-[2rem] mb-[30px] font-bold">
          FakeTube je mimo provoz
        </h1>

        <div className="mb-[30px]">
          <p className="mb-5">FakeTube je momentálně mimo provoz.</p>
          <p className="mb-5">
            Bližší informace budou zveřejněny na této stránce a na sociálních sítích.
          </p>
        </div>

        <div className="mb-[30px]">
          <p className="font-bold mb-[5px]">Instagram:</p>
          <p>
            <a
              href="https://www.instagram.com/faketube.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00B7EF] no-underline hover:underline"
            >
              https://www.instagram.com/faketube.cz
            </a>
          </p>
        </div>

        <div className="mb-[30px]">
          <p className="font-bold mb-[5px]">Kontakt:</p>
          <p>
            <a
              href="mailto:kontakt@petrvurm.cz"
              className="text-[#00B7EF] no-underline hover:underline"
            >
              kontakt@petrvurm.cz
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
