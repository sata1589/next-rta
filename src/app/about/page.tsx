import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">キコエル</h1>
        </div>
      </header>

      <main className="container mx-auto max-w-screen-lg px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">キコエルについて</h2>
          <p className="text-lg text-muted-foreground mb-4">
            このサイトは音声ファイルを投稿できる匿名掲示板です。BGM、SE、ボイスなど好きな音声を投稿していってください。
          </p>
          <p className="text-lg text-muted-foreground">
            ご利用にあたっては、以下の注意点をしっかりと読んでください。
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">利用における注意点</h2>
          <p className="text-lg text-muted-foreground mb-4">
            このサイトに投稿された音声はだれでも自由に再生、ダウンロードできます。そのため、著作権の含まれる音声ファイルを投稿しないでください。
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            音声ファイルのサイズ制限は200KBまでです。サイズが大きすぎる場合は適宜編集をしてください。
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            1つのスレッドにはコメントを100件までしか追加できません。コメント上限に達したら新たなスレッドを立ててください。
          </p>
          <p className="text-lg text-muted-foreground">
            ルールを守って自由にご利用ください。
          </p>
        </section>
      </main>

      <footer className="bg-muted py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">TechInnovate</h3>
              <p className="text-muted-foreground">
                Empowering businesses through technology
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
