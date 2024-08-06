'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';

type tagPickerProps = {
  tags: string[];
  onChange?: (tags: string[]) => void;
  defaultTags: string[];
  onAddTag?: (tag: string) => void;
  className?: string;
};

export const TagPicker: React.FC<tagPickerProps> = ({ tags, defaultTags, onChange, className }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(defaultTags);
  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    onChange?.(selectedTags);
  };
  return (
    <div className={cn('flex gap-2', className)}>
      {tags.map((tag) => (
        <Tag
          key={tag}
          name={tag}
          onClick={() => handleTagClick(tag)}
          checked={selectedTags.includes(tag)}
        />
      ))}
    </div>
  );
};

type tagProps = {
  name: string;
  key: string;
  onClick: () => void;
  checked?: boolean;
  className?: string;
};

export const Tag: React.FC<tagProps> = ({ name, key, className, onClick, checked }) => {
  return (
    <button
      type='button'
      key={key}
      className={cn(
        `rounded-md border border-border px-2 py-1 transition-colors duration-300 hover:bg-none`,
        checked ? 'bg-white text-black' : '',
        className,
      )}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
