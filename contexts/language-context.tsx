"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define supported languages
export type Language = "en" | "ja"

// Define the context type
type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
})

// Translation data
const translations = {
  en: {
    // Header
    "nav.productOverview": "Product Overview",
    "nav.howToUse": "How to use",
    "nav.toolExamples": "Tool Examples",
    "nav.pricingPlans": "Pricing Plans",
    "nav.login": "Log in",
    "nav.signup": "Sign up",
    "language.english": "English",
    "language.japanese": "Japanese",

    // Hero Section
    "hero.title": "A generative AI platform that is super easy to use",
    "hero.subtitle":
      "All-in-One AI supports you with over 200 customizable AI tools for your needs without the need for prompts.",
    "hero.cta": "New registration (free)",

    // Concerns Section
    "concerns.title": "Do you have any of these concerns?",
    "concerns.tooMany.title": "Too many generative AI apps",
    "concerns.tooMany.description": "There are so many AI apps that I don't know which one to use...",
    "concerns.difficulty.title": "Difficulty of the prompt",
    "concerns.difficulty.description": "The prompt I worked so hard on isn't showing the output I wanted...",
    "concerns.barrier.title": "The barrier to use",
    "concerns.barrier.description":
      "I want to improve work efficiency with generative AI, but I don't know how to use it...",
    "concerns.tedious.title": "Creating tedious prompts",
    "concerns.tedious.description": "It's a pain to have to think up a prompt for each specific case...",

    // Solutions Section
    "solutions.title": "Value provided by All-in-One AI (Solution)",
    "solutions.optimized.title": "Optimized for each use case",
    "solutions.optimized.description": "Generative AI experts have already selected the best tools for each use case!",
    "solutions.easy.title": "Easy operation and high quality results",
    "solutions.easy.description":
      "No complicated operations required! Just select your use case and enter the necessary information to get high-quality output!",
    "solutions.noPrompt.title": "No prompt settings required",
    "solutions.noPrompt.description": "No thinking required - prompts have been pre-set by generative AI experts!",
    "solutions.tested.title": "Tested and tested for quality",
    "solutions.tested.description":
      "Rest assured that generative AI experts have pre-tested the prompt output results!",

    // Product Overview Section
    "overview.title": "Product Overview",
    "overview.subtitle": "Prompt-free generation AI tool All-in-One AI",
    "overview.heading": "Over 200 generative AI tools available in one app without writing complex prompts",
    "overview.description":
      "All-In-One AI is a platform that allows you to freely use various generative AI tools for various purposes in one app. Users can generate text and images for various purposes with simple operations without writing complex prompts.",
    "overview.cta": "Try it for free first!",
    "overview.keyFeatures": "Key Features",
    "overview.toolCategories": "Tool Categories",
    "overview.technology": "Technology Behind All-in-One AI",
    "overview.advancedAI": "Advanced AI Models",
    "overview.techDescription":
      "All-in-One AI leverages the latest advancements in artificial intelligence, including large language models and image generation technologies. Our platform integrates with multiple AI providers to ensure you always have access to the best tools for your specific needs.",
    "overview.feature.tools": "200+ Pre-configured Tools",
    "overview.feature.tools.desc":
      "Access over 200 AI tools optimized for specific use cases, all without writing complex prompts.",
    "overview.feature.ui": "Intuitive User Interface",
    "overview.feature.ui.desc": "Simple, user-friendly interface designed for both beginners and experienced users.",
    "overview.feature.quality": "High-Quality Outputs",
    "overview.feature.quality.desc":
      "Expert-tested prompts ensure consistently high-quality results for all your AI-generated content.",
    "overview.feature.language": "Multi-language Support",
    "overview.feature.language.desc":
      "Generate content in multiple languages, including English and Japanese, with native-quality results.",
    "overview.feature.storage": "Content Storage",
    "overview.feature.storage.desc":
      "Save and organize all your generated content for easy access and future reference.",
    "overview.feature.updates": "Regular Updates",
    "overview.feature.updates.desc":
      "Continuous addition of new tools and improvements to existing ones based on user feedback.",
    "overview.category.content": "Content Creation",
    "overview.category.image": "Image Generation",
    "overview.category.business": "Business Tools",
    "overview.category.developer": "Developer Tools",
    "overview.integration": "Integration with leading AI models",
    "overview.expertPrompts": "Expert-crafted prompts for optimal results",
    "overview.regularUpdates": "Regular updates to incorporate new AI capabilities",

    // Tool Examples Section
    "tools.title": "Examples of available tools",
    "tools.description":
      "All-in-One AI comes equipped with a number of convenient generative AI tools that can be used without writing prompts.",
    "tools.blogPost": "Blog Post Creation",
    "tools.sns": "SNS post writing",
    "tools.advertising": "Digital advertising copywriting",
    "tools.image": "Image generation using DALL-E",
    "tools.content": "Content Creation",
    "tools.image.gen": "Image Generation",
    "tools.business": "Business Tools",
    "tools.developer": "Developer Tools",
    "tools.blog.desc": "Generate complete blog posts with proper structure, headings, and engaging content.",
    "tools.blog.input": "Topic: Benefits of meditation for productivity",
    "tools.sns.desc": "Create engaging social media posts optimized for different platforms.",
    "tools.sns.input": "Product: Eco-friendly water bottle, Platform: Instagram",
    "tools.ad.desc": "Generate compelling ad copy for digital marketing campaigns.",
    "tools.ad.input": "Product: Online course, Target: Working professionals",
    "tools.email.title": "Email Newsletter",
    "tools.email.desc": "Create professional email newsletters with engaging content.",
    "tools.email.input": "Industry: Fitness, Purpose: Monthly update",
    "tools.product.title": "Product Descriptions",
    "tools.product.desc": "Generate compelling product descriptions for e-commerce.",
    "tools.product.input": "Product: Wireless headphones, Features: Noise-cancelling, 20hr battery",
    "tools.summary.title": "Article Summarizer",
    "tools.summary.desc": "Condense long articles into concise, informative summaries.",
    "tools.summary.input": "Paste article text or URL",
    "tools.dalle.title": "DALL-E Image Generation",
    "tools.dalle.desc": "Create custom images based on your descriptions using DALL-E.",
    "tools.dalle.input": "A futuristic city with flying cars and vertical gardens",
    "tools.productVis.title": "Product Visualization",
    "tools.productVis.desc": "Generate realistic product images for marketing materials.",
    "tools.productVis.input": "A sleek smartphone with gradient blue color on white background",
    "tools.logo.title": "Logo Generator",
    "tools.logo.desc": "Create professional logo designs for your brand.",
    "tools.logo.input": "Business name: EcoTech, Industry: Sustainable technology",
    "tools.business.plan.title": "Business Plan Generator",
    "tools.business.plan.desc": "Create comprehensive business plans with market analysis.",
    "tools.business.plan.input": "Business type: Mobile app for fitness, Target market: Young professionals",
    "tools.marketing.title": "Marketing Strategy",
    "tools.marketing.desc": "Generate comprehensive marketing strategies for your business.",
    "tools.marketing.input": "Product: Online course platform, Budget: Medium, Goals: Increase subscribers",
    "tools.swot.title": "SWOT Analysis",
    "tools.swot.desc": "Generate detailed SWOT analyses for business planning.",
    "tools.swot.input": "Business: Coffee shop chain, Market: Urban areas",
    "tools.code.title": "Code Generator",
    "tools.code.desc": "Generate code snippets in various programming languages.",
    "tools.code.input": "Create a React component for a contact form with validation",
    "tools.api.title": "API Documentation",
    "tools.api.desc": "Generate comprehensive API documentation from descriptions.",
    "tools.api.input": "API for user authentication with endpoints for login, register, and password reset",
    "tools.db.title": "Database Schema",
    "tools.db.desc": "Generate database schemas and SQL queries from requirements.",
    "tools.db.input": "E-commerce platform with users, products, orders, and reviews",
    "tools.example.input": "Example input:",

    // How to Use Section
    "howto.title": "How to use All-in-One AI",
    "howto.subtitle": "Get started with our easy-to-use AI platform in just a few simple steps.",
    "howto.watch": "Watch Tutorial",
    "howto.steps.title": "Simple 3-Step Process",
    "howto.step1.title": "Select a Tool",
    "howto.step1.desc": "Browse our extensive collection of AI tools and select the one that matches your needs.",
    "howto.step2.title": "Enter Your Information",
    "howto.step2.desc": "Fill in the required fields with your specific information and requirements.",
    "howto.step3.title": "Get Your Results",
    "howto.step3.desc": "Receive high-quality AI-generated content that's ready to use for your specific needs.",
    "howto.interface.title": "Tool Interface Example",
    "howto.interface.image": "Image Generation",
    "howto.interface.desc":
      "Our image generation tool allows you to create stunning visuals without writing complex prompts. Simply select the type of image you want to create and provide basic information.",
    "howto.interface.feature1": "Choose from multiple image styles",
    "howto.interface.feature2": "Specify basic parameters like subject and mood",
    "howto.interface.feature3": "Download in multiple formats and resolutions",
    "howto.interface.try": "Try Image Generation",
    "howto.faq.title": "Frequently Asked Questions",
    "howto.faq.expertise.q": "Do I need any expertise to use All-In-One AI?",
    "howto.faq.expertise.a":
      "No, you don't need to be an expert. All-In-One AI provides an intuitive interface without the need for complex prompt settings. It is designed so that even beginners can easily use the AI tool.",
    "howto.faq.time.q": "How long does it take to generate content?",
    "howto.faq.time.a":
      "Most content is generated within seconds. Larger or more complex requests may take slightly longer, but you'll typically receive your results in under a minute.",
    "howto.faq.edit.q": "Can I edit the generated content?",
    "howto.faq.edit.a":
      "Yes, all generated content can be edited, refined, or regenerated to better match your needs. You have full control over the final output.",
    "howto.faq.limit.q": "Is there a limit to how many tools I can use?",
    "howto.faq.limit.a":
      "You can use all available tools within your subscription plan. The only limitation is the number of tokens you have available for generating content.",

    // Pricing Section
    "pricing.title": "Pricing Plans",
    "pricing.description": "All-in-One AI offers a subscription-based pricing plan (in US dollars).",
    "pricing.free.title": "Free Plan",
    "pricing.free.price": "free",
    "pricing.starter.title": "Starter Plan",
    "pricing.starter.price": "$9/month",
    "pricing.starter.popular": "Most popular",
    "pricing.professional.title": "Professional Plan",
    "pricing.professional.price": "$19/month",
    "pricing.enterprise.title": "Enterprise Plan",
    "pricing.enterprise.price": "Quote",
    "pricing.tokens": "Up to {count} tokens",
    "pricing.tools": "Free tools available",
    "pricing.tools.starter": "Starter tools also available",
    "pricing.tools.professional": "All tools available, including professional tools",
    "pricing.storage": "Storing generated content",
    "pricing.selectPlan": "Select Plan",
    "pricing.contactUs": "Contact Us",
    "pricing.faq.title": "Frequently Asked Questions",
    "pricing.faq.tokens.q": "How are tokens calculated?",
    "pricing.faq.tokens.a":
      "Tokens are calculated based on the length of the text you generate or process. Each word typically uses 1-2 tokens, and images have their own token calculations based on complexity and size.",
    "pricing.faq.upgrade.q": "Can I upgrade or downgrade my plan?",
    "pricing.faq.upgrade.a":
      "Yes, you can upgrade or downgrade your subscription plan at any time. Changes will take effect at the start of your next billing cycle.",
    "pricing.faq.exceed.q": "What happens if I exceed my token limit?",
    "pricing.faq.exceed.a":
      "If you reach your token limit, you'll be notified and given the option to upgrade to a higher plan or wait until your tokens reset at the beginning of your next billing cycle.",
    "pricing.faq.rollover.q": "Do unused tokens roll over?",
    "pricing.faq.rollover.a":
      "No, unused tokens do not roll over to the next billing cycle. Your token allocation resets at the beginning of each billing period.",

    // Login/Signup
    "login.title": "Log in to your account",
    "login.subtitle": "Enter your email and password to access your account",
    "login.email": "Email",
    "login.password": "Password",
    "login.forgot": "Forgot password?",
    "login.button": "Log in",
    "login.or": "Or continue with",
    "login.google": "Google",
    "login.apple": "Apple",
    "login.noAccount": "Don't have an account?",
    "login.signup": "Sign up",

    "signup.title": "Create an account",
    "signup.subtitle": "Enter your information to create an account",
    "signup.name": "Name",
    "signup.email": "Email",
    "signup.password": "Password",
    "signup.terms": "I agree to the",
    "signup.termsLink": "terms of service",
    "signup.and": "and",
    "signup.privacyLink": "privacy policy",
    "signup.button": "Sign up",
    "signup.or": "Or continue with",
    "signup.google": "Google",
    "signup.apple": "Apple",
    "signup.hasAccount": "Already have an account?",
    "signup.login": "Log in",

    // Dashboard
    "dashboard.title": "Dashboard",
    "dashboard.welcome": "Welcome back! Access your AI tools and generated content.",
    "dashboard.search": "Search for tools...",
    "dashboard.tabs.all": "All Tools",
    "dashboard.tabs.recent": "Recent",
    "dashboard.tabs.favorites": "Favorites",
    "dashboard.tabs.content": "My Content",

    // Footer
    "footer.copyright": "All rights reserved.",
    "footer.company": "Operating company",
    "footer.terms": "Terms of service",
    "footer.privacy": "Privacy Policy",
    "footer.inquiry": "Inquiry",

    // Common
    "common.tryFree": "Try it for free first!",
    "common.readyToSimplify": "Ready to simplify your AI experience?",
    "common.joinUsers": "Join thousands of users who are already benefiting from our prompt-free AI tools.",
  },
  ja: {
    // Header
    "nav.productOverview": "製品概要",
    "nav.howToUse": "使い方",
    "nav.toolExamples": "ツール例",
    "nav.pricingPlans": "料金プラン",
    "nav.login": "ログイン",
    "nav.signup": "サインアップ",
    "language.english": "英語",
    "language.japanese": "日本語",

    // Hero Section
    "hero.title": "使いやすい生成AIプラットフォーム",
    "hero.subtitle":
      "All-in-One AIは、プロンプトを必要とせずに、あなたのニーズに合わせた200以上のカスタマイズ可能なAIツールを提供します。",
    "hero.cta": "新規登録（無料）",

    // Concerns Section
    "concerns.title": "こんな悩みはありませんか？",
    "concerns.tooMany.title": "生成AIアプリが多すぎる",
    "concerns.tooMany.description": "AIアプリがたくさんあって、どれを使えばいいのかわからない...",
    "concerns.difficulty.title": "プロンプトの難しさ",
    "concerns.difficulty.description": "頑張って作ったプロンプトが思った出力を表示してくれない...",
    "concerns.barrier.title": "使用の障壁",
    "concerns.barrier.description": "生成AIで仕事の効率を上げたいけど、使い方がわからない...",
    "concerns.tedious.title": "面倒なプロンプト作成",
    "concerns.tedious.description": "ケースごとにプロンプトを考えるのが面倒...",

    // Solutions Section
    "solutions.title": "All-in-One AIが提供する価値（解決策）",
    "solutions.optimized.title": "各ユースケースに最適化",
    "solutions.optimized.description": "生成AIの専門家が各ユースケースに最適なツールを既に選定しています！",
    "solutions.easy.title": "簡単な操作と高品質な結果",
    "solutions.easy.description":
      "複雑な操作は必要ありません！ユースケースを選択して必要な情報を入力するだけで、高品質な出力が得られます！",
    "solutions.noPrompt.title": "プロンプト設定不要",
    "solutions.noPrompt.description":
      "考える必要はありません - プロンプトは生成AIの専門家によって事前に設定されています！",
    "solutions.tested.title": "品質のためのテスト済み",
    "solutions.tested.description": "生成AIの専門家がプロンプト出力結果を事前にテスト済みなので安心してください！",

    // Product Overview Section
    "overview.title": "製品概要",
    "overview.subtitle": "プロンプトフリーの生成AIツール All-in-One AI",
    "overview.heading": "複雑なプロンプトを書かずに1つのアプリで200以上の生成AIツールが利用可能",
    "overview.description":
      "All-in-One AIは、1つのアプリでさまざまな目的のために様々な生成AIツールを自由に使用できるプラットフォームです。ユーザーは複雑なプロンプトを書かずに、簡単な操作でさまざまな目的のためのテキストや画像を生成できます。",
    "overview.cta": "まずは無料でお試しください！",
    "overview.keyFeatures": "主な機能",
    "overview.toolCategories": "ツールカテゴリー",
    "overview.technology": "All-in-One AIの背後にある技術",
    "overview.advancedAI": "高度なAIモデル",
    "overview.techDescription":
      "All-in-One AIは、大規模言語モデルや画像生成技術など、人工知能の最新の進歩を活用しています。当社のプラットフォームは複数のAIプロバイダーと統合されており、特定のニーズに最適なツールに常にアクセスできることを保証します。",
    "overview.feature.tools": "200以上の事前設定ツール",
    "overview.feature.tools.desc":
      "複雑なプロンプトを書かずに、特定のユースケース向けに最適化された200以上のAIツールにアクセスできます。",
    "overview.feature.ui": "直感的なユーザーインターフェース",
    "overview.feature.ui.desc": "初心者から経験豊富なユーザーまで、シンプルで使いやすいインターフェースを提供します。",
    "overview.feature.quality": "高品質な出力",
    "overview.feature.quality.desc":
      "専門家によってテストされたプロンプトにより、AI生成コンテンツの一貫した高品質な結果を保証します。",
    "overview.feature.language": "多言語サポート",
    "overview.feature.language.desc": "英語や日本語を含む複数の言語でネイティブ品質のコンテンツを生成できます。",
    "overview.feature.storage": "コンテンツストレージ",
    "overview.feature.storage.desc":
      "生成されたすべてのコンテンツを保存して整理し、簡単にアクセスして将来参照できます。",
    "overview.feature.updates": "定期的な更新",
    "overview.feature.updates.desc":
      "ユーザーフィードバックに基づいて、新しいツールの継続的な追加と既存のツールの改善を行っています。",
    "overview.category.content": "コンテンツ作成",
    "overview.category.image": "画像生成",
    "overview.category.business": "ビジネスツール",
    "overview.category.developer": "開発者ツール",
    "overview.integration": "主要なAIモデルとの統合",
    "overview.expertPrompts": "最適な結果を得るための専門家が作成したプロンプト",
    "overview.regularUpdates": "新しいAI機能を組み込むための定期的な更新",

    // Tool Examples Section
    "tools.title": "利用可能なツールの例",
    "tools.description": "All-in-One AIには、プロンプトを書かずに使用できる便利な生成AIツールが多数搭載されています。",
    "tools.blogPost": "ブログ記事作成",
    "tools.sns": "SNS投稿作成",
    "tools.advertising": "デジタル広告コピーライティング",
    "tools.image": "DALL-Eを使用した画像生成",
    "tools.content": "コンテンツ作成",
    "tools.image.gen": "画像生成",
    "tools.business": "ビジネスツール",
    "tools.developer": "開発者ツール",
    "tools.blog.desc": "適切な構造、見出し、魅力的なコンテンツを備えた完全なブログ記事を生成します。",
    "tools.blog.input": "トピック：生産性向上のための瞑想の効果",
    "tools.sns.desc": "異なるプラットフォーム向けに最適化された魅力的なソーシャルメディア投稿を作成します。",
    "tools.sns.input": "製品：環境に優しい水筒、プラットフォーム：Instagram",
    "tools.ad.desc": "デジタルマーケティングキャンペーン向けの魅力的な広告コピーを生成します。",
    "tools.ad.input": "製品：オンラインコース、ターゲット：働く専門家",
    "tools.email.title": "メールニュースレター",
    "tools.email.desc": "魅力的なコンテンツを含むプロフェッショナルなメールニュースレターを作成します。",
    "tools.email.input": "業界：フィットネス、目的：月次アップデート",
    "tools.product.title": "商品説明",
    "tools.product.desc": "Eコマース向けの魅力的な商品説明を生成します。",
    "tools.product.input": "製品：ワイヤレスヘッドフォン、機能：ノイズキャンセリング、20時間バッテリー",
    "tools.summary.title": "記事要約ツール",
    "tools.summary.desc": "長い記事を簡潔で情報豊かな要約に凝縮します。",
    "tools.summary.input": "記事のテキストまたはURLを貼り付けてください",
    "tools.dalle.title": "DALL-E画像生成",
    "tools.dalle.desc": "DALL-Eを使用して、説明に基づいてカスタム画像を作成します。",
    "tools.dalle.input": "空飛ぶ車と垂直庭園のある未来都市",
    "tools.productVis.title": "製品ビジュアライゼーション",
    "tools.productVis.desc": "マーケティング資料用のリアルな製品画像を生成します。",
    "tools.productVis.input": "白い背景にグラデーションブルーカラーのスタイリッシュなスマートフォン",
    "tools.logo.title": "ロゴジェネレーター",
    "tools.logo.desc": "ブランド向けのプロフェッショナルなロゴデザインを作成します。",
    "tools.logo.input": "ビジネス名：EcoTech、業界：持続可能な技術",
    "tools.business.plan.title": "ビジネスプラン生成",
    "tools.business.plan.desc": "市場分析を含む包括的なビジネスプランを作成します。",
    "tools.business.plan.input": "ビジネスタイプ：フィットネス向けモバイルアプリ、ターゲット市場：若手専門家",
    "tools.marketing.title": "マーケティング戦略",
    "tools.marketing.desc": "ビジネス向けの包括的なマーケティング戦略を生成します。",
    "tools.marketing.input": "製品：オンラインコースプラットフォーム、予算：中程度、目標：登録者増加",
    "tools.swot.title": "SWOT分析",
    "tools.swot.desc": "ビジネスプランニング向けの詳細なSWOT分析を生成します。",
    "tools.swot.input": "ビジネス：コーヒーショップチェーン、市場：都市部",
    "tools.code.title": "コードジェネレーター",
    "tools.code.desc": "様々なプログラミング言語でコードスニペットを生成します。",
    "tools.code.input": "バリデーション付きのお問い合わせフォーム用Reactコンポーネントを作成",
    "tools.api.title": "APIドキュメント",
    "tools.api.desc": "説明からの包括的なAPIドキュメントを生成します。",
    "tools.api.input": "ログイン、登録、パスワードリセットのエンドポイントを持つユーザー認証用API",
    "tools.db.title": "データベーススキーマ",
    "tools.db.desc": "要件からデータベーススキーマとSQLクエリを生成します。",
    "tools.db.input": "ユーザー、製品、注文、レビューを持つEコマースプラットフォーム",
    "tools.example.input": "入力例：",

    // How to Use Section
    "howto.title": "All-in-One AIの使い方",
    "howto.subtitle": "簡単な手順で使いやすいAIプラットフォームを始めましょう。",
    "howto.watch": "チュートリアルを見る",
    "howto.steps.title": "簡単な3ステッププロセス",
    "howto.step1.title": "ツールを選択",
    "howto.step1.desc": "豊富なAIツールコレクションを閲覧し、ニーズに合ったものを選択します。",
    "howto.step2.title": "情報を入力",
    "howto.step2.desc": "特定の情報と要件を必要なフィールドに入力します。",
    "howto.step3.title": "結果を取得",
    "howto.step3.desc": "特定のニーズにすぐに使用できる高品質なAI生成コンテンツを受け取ります。",
    "howto.interface.title": "ツールインターフェース例",
    "howto.interface.image": "画像生成",
    "howto.interface.desc":
      "Our image generation tool allows you to create stunning visuals without writing complex prompts. Simply select the type of image you want to create and provide basic information.",
    "howto.interface.feature1": "複数の画像スタイルから選択",
    "howto.interface.feature2": "Specify basic parameters like subject and mood",
    "howto.interface.feature3": "複数のフォーマットと解像度でダウンロード",
    "howto.interface.try": "画像生成を試す",
    "howto.faq.title": "よくある質問",
    "howto.faq.expertise.q": "All-In-One AIを使用するには専門知識が必要ですか？",
    "howto.faq.expertise.a":
      "いいえ、専門家である必要はありません。All-In-One AIは、複雑なプロンプト設定を必要としない直感的なインターフェースを提供します。初心者でも簡単にAIツールを使用できるように設計されています。",
    "howto.faq.time.q": "コンテンツの生成にはどれくらい時間がかかりますか？",
    "howto.faq.time.a":
      "ほとんどのコンテンツは数秒以内に生成されます。より大きな、または複雑なリクエストは少し時間がかかる場合がありますが、通常は1分以内に結果を受け取ることができます。",
    "howto.faq.edit.q": "生成されたコンテンツを編集できますか？",
    "howto.faq.edit.a":
      "はい、生成されたすべてのコンテンツは、ニーズにより適合するように編集、改良、または再生成することができます。最終的な出力を完全に制御できます。",
    "howto.faq.limit.q": "使用できるツールの数に制限はありますか？",
    "howto.faq.limit.a":
      "サブスクリプションプラン内で利用可能なすべてのツールを使用できます。唯一の制限は、コンテンツの生成に利用できるトークンの数です。",

    // Pricing Section
    "pricing.title": "料金プラン",
    "pricing.description": "All-in-One AIはサブスクリプションベースの料金プラン（米ドル）を提供しています。",
    "pricing.free.title": "無料プラン",
    "pricing.free.price": "無料",
    "pricing.starter.title": "スタータープラン",
    "pricing.starter.price": "$9/月",
    "pricing.starter.popular": "人気",
    "pricing.professional.title": "プロフェッショナルプラン",
    "pricing.professional.price": "$19/月",
    "pricing.enterprise.title": "エンタープライズプラン",
    "pricing.enterprise.price": "お見積り",
    "pricing.tokens": "最大{count}トークン",
    "pricing.tools": "無料ツールが利用可能",
    "pricing.tools.starter": "スターターツールも利用可能",
    "pricing.tools.professional": "プロフェッショナルツールを含むすべてのツールが利用可能",
    "pricing.storage": "生成されたコンテンツの保存",
    "pricing.selectPlan": "プランを選択",
    "pricing.contactUs": "お問い合わせ",
    "pricing.faq.title": "よくある質問",
    "pricing.faq.tokens.q": "トークンはどのように計算されますか？",
    "pricing.faq.tokens.a":
      "トークンは、生成または処理するテキストの長さに基づいて計算されます。各単語は通常1〜2トークンを使用し、画像は複雑さとサイズに基づいて独自のトークン計算があります。",
    "pricing.faq.upgrade.q": "プランをアップグレードまたはダウングレードできますか？",
    "pricing.faq.upgrade.a":
      "はい、いつでもサブスクリプションプランをアップグレードまたはダウングレードできます。変更は次の請求サイクルの開始時に有効になります。",
    "pricing.faq.exceed.q": "トークン制限を超えた場合はどうなりますか？",
    "pricing.faq.exceed.a":
      "トークン制限に達すると、通知が表示され、より高いプランにアップグレードするか、次の請求サイクルの開始時にトークンがリセットされるまで待つオプションが提供されます。",
    "pricing.faq.rollover.q": "未使用のトークンは繰り越されますか？",
    "pricing.faq.rollover.a":
      "いいえ、未使用のトークンは次の請求サイクルに繰り越されません。トークン割り当ては各請求期間の開始時にリセットされます。",

    // Login/Signup
    "login.title": "アカウントにログイン",
    "login.subtitle": "メールアドレスとパスワードを入力してアカウントにアクセスしてください",
    "login.email": "メールアドレス",
    "login.password": "パスワード",
    "login.forgot": "パスワードをお忘れですか？",
    "login.button": "ログイン",
    "login.or": "または次で続行",
    "login.google": "Google",
    "login.apple": "Apple",
    "login.noAccount": "アカウントをお持ちでないですか？",
    "login.signup": "サインアップ",

    "signup.title": "アカウントを作成",
    "signup.subtitle": "情報を入力してアカウントを作成してください",
    "signup.name": "名前",
    "signup.email": "メールアドレス",
    "signup.password": "パスワード",
    "signup.terms": "私は",
    "signup.termsLink": "利用規約",
    "signup.and": "および",
    "signup.privacyLink": "プライバシーポリシー",
    "signup.termsEnd": "に同意します",
    "signup.button": "サインアップ",
    "signup.or": "または次で続行",
    "signup.google": "Google",
    "signup.apple": "Apple",
    "signup.hasAccount": "すでにアカウントをお持ちですか？",
    "signup.login": "ログイン",

    // Dashboard
    "dashboard.title": "ダッシュボード",
    "dashboard.welcome": "お帰りなさい！AIツールと生成されたコンテンツにアクセスしてください。",
    "dashboard.search": "ツールを検索...",
    "dashboard.tabs.all": "すべてのツール",
    "dashboard.tabs.recent": "最近",
    "dashboard.tabs.favorites": "お気に入り",
    "dashboard.tabs.content": "マイコンテンツ",

    // Footer
    "footer.copyright": "All rights reserved.",
    "footer.company": "運営会社",
    "footer.terms": "利用規約",
    "footer.privacy": "プライバシーポリシー",
    "footer.inquiry": "お問い合わせ",

    // Common
    "common.tryFree": "まずは無料でお試しください！",
    "common.readyToSimplify": "AIエクスペリエンスを簡素化する準備はできていますか？",
    "common.joinUsers": "プロンプトフリーのAIツールの恩恵を既に受けている何千人ものユーザーに参加しましょう。",
  },
}

// Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Try to get the language from localStorage, default to 'en'
  const [language, setLanguage] = useState<Language>("en")

  // Load saved language preference from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ja")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    const translation = translations[language][key as keyof (typeof translations)[typeof language]]
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`)
      return key
    }
    return translation
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
